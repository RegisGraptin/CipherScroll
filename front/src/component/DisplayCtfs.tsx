import { NextPage } from "next";
import { useReadContract, useReadContracts } from "wagmi";

import CtfContract from "../abi/CtfContract.json";
import CtfCard from "./CtfCard";

const DisplayCtfs: NextPage = () => {

    const { data: lastCtfId, isLoading: lastCtfLoading } = useReadContract({
        address: "0xD6ad21bCD4b40dc06FcfC3Df5Fd8E550425251D4",
        abi: CtfContract.abi,
        functionName: 'problemId',
        args: [],
    })


    const { data: ctfsDetail, isLoading: ctfsDetailLoading } = useReadContracts({
        contracts: Array.from({ length: Number(lastCtfId) }).map(
        (_, index) => ({
            abi: CtfContract.abi,
            address: "0xD6ad21bCD4b40dc06FcfC3Df5Fd8E550425251D4",
            functionName: "getCtfProblems",
            args: [index],
        })
        ),
    });

    return (

        <section className='container mx-auto px-4'>

            {lastCtfLoading && (
                <div>Loading id..</div>
            )}

            {ctfsDetailLoading && (
                <div>Loading details..</div>
            )}

            <div>
                {ctfsDetail && ctfsDetail.map(function (ctfDetail, i) {
                    return <CtfCard key={i} ctfDetail={ctfDetail.result} />
                })}

            </div>


        </section>
    );


}

export default DisplayCtfs;