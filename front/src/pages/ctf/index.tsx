import { NextPage } from 'next';
import { Header } from '../../component/Header';

const CtfPage: NextPage = () => {

    //   const { data: n_ctfs } = useReadContract({
    //     address: "0x",
    //     abi: abi,
    //     functionName: '',
    //     args: [],
    //   })

    return (

        <div>

            <Header />


            <section className="bg-white">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
                    <h2>Actuel ctf list</h2>

                </div>
            </section>


        </div>
    );
};

export default CtfPage;
