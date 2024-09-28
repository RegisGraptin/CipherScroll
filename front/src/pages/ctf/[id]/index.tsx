import { NextPage } from 'next';
import { Header } from '../../../component/Header';

import { useRouter } from 'next/router';

import CtfContract from "../../../abi/CtfContract.json";
import { useAccount, useReadContract } from 'wagmi';
import { FormEvent } from 'react';

const CtfPage: NextPage = () => {


    const { address } = useAccount()

    const router = useRouter()
    const { id } = router.query

    const { data: ctfProblem, isLoading: ctfProblemLoading } = useReadContract({
        address: "0x4d24AC17fD9f3689ebf05E1B3eC9be2323990B51",
        abi: CtfContract.abi,
        functionName: 'getCtfProblems',
        args: [Number(id) - 1],
    })

    const { data: userCompleted, isLoading: userCompletedLoading } = useReadContract({
        address: "0x4d24AC17fD9f3689ebf05E1B3eC9be2323990B51",
        abi: CtfContract.abi,
        functionName: 'getUserCompleted',
        args: [Number(id) - 1, address],
    })

    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        console.log(formData);


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
                                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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

        </div>
    );
};

export default CtfPage;
