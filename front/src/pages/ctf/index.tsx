import { NextPage } from 'next';
import { Header } from '../../component/Header';
import { useReadContract } from 'wagmi';
import DisplayCtfs from '../../component/DisplayCtfs';



const CtfPage: NextPage = () => {

    return (

        <div>

            <Header />


            <section className="bg-white pt-14">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
                    <DisplayCtfs />
                </div>
            </section>


        </div>
    );
};

export default CtfPage;
