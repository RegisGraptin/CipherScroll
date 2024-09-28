import { NextPage } from 'next';
import { Header } from '../../../component/Header';

import { useRouter } from 'next/router';

import CtfContract from "../../../abi/CtfContract.json";
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { FormEvent } from 'react';

import { BarretenbergBackend, BarretenbergVerifier as Verifier } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';

import circuit from '../../../circuit/ch1.json';



const CtfPage: NextPage = () => {

    const { data, error, writeContract } = useWriteContract()

    const { address } = useAccount()

    const router = useRouter()
    const { id } = router.query

    const { data: ctfProblem, isLoading: ctfProblemLoading } = useReadContract({
        address: "0xD6ad21bCD4b40dc06FcfC3Df5Fd8E550425251D4",
        abi: CtfContract.abi,
        functionName: 'getCtfProblems',
        args: [Number(id) - 1],
    })

    const { data: userCompleted, isLoading: userCompletedLoading } = useReadContract({
        address: "0xD6ad21bCD4b40dc06FcfC3Df5Fd8E550425251D4",
        abi: CtfContract.abi,
        functionName: 'getUserCompleted',
        args: [Number(id) - 1, address],
    })

      

    function uint8ArrayToHex(uint8Array) {
        return '0x' + Array.from(uint8Array)
          .map(byte => byte.toString(16).padStart(2, '0')) // Convert to hex, ensure two characters for each byte
          .join(''); // Join all hex parts into one string
      }
    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        let userInput = formData.get("userProposition");

        const input = { message: userInput };

        let proof;

        try {
            console.log("Loading noir...")
            const backend = new BarretenbergBackend(circuit);
            const noir = new Noir(circuit);

            console.log("Generate proof...")
            const { witness } = await noir.execute(input);
            proof = await backend.generateProof(witness);
        } catch (e) {
            console.log(e);
            return;
        }
        
        if (proof) {
            // Send it to the smart contract
            console.log(proof);
            
            console.log("Write smart contract");
            
            writeContract({
                abi: CtfContract.abi,
                address: '0xD6ad21bCD4b40dc06FcfC3Df5Fd8E550425251D4',
                functionName: 'validateProof',
                args: [
                    0,
                    uint8ArrayToHex(proof.proof),
                    proof.publicInputs,
                ],
             })
        }

    }


    return (

        <div>

            <Header />

            <section className="bg-white pt-14">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                    {ctfProblemLoading && (
                        <div>Loading problem..</div>
                    )}

                    {ctfProblem && (
                        <div>
                            <h2>Challenge {id} - {ctfProblem.title}</h2>
                            <p className='pb-5'>{ctfProblem.description}</p>

                            <hr />

                            <div className='pt-5'>

                                {userCompletedLoading && (
                                    <p>Retrieving the last data...</p>
                                )}

                                {!userCompletedLoading && (
                                    <div>
                                        {userCompleted && (
                                            <p>User already have completed this challenge!</p>
                                        )}
                                        {!userCompleted && (
                                            
                                            <form onSubmit={onSubmit}>
                                                <p>Here submit the challenge</p>
                                                <div className="mb-6">
                                                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        User proposition
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        id="large-input" 
                                                        name="userProposition"
                                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" 
                                                    />
                                                </div>
                                                <button 
                                                    type="submit" 
                                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                                >
                                                    Submit
                                                </button>
                                            </form>

                                        )}
                                    </div>
                                )}

                            </div>
                        </div>
                    )}

                </div>
            </section>

            <section>
                <hr/>
                {error && (
                    <div>Error: {(error as BaseError).shortMessage || error.message}</div>
                )}
            </section>

        </div>
    );
};

export default CtfPage;
