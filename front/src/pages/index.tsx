import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../component/Header';

const Home: NextPage = () => {
  return (
    <div>

      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ "clipPath": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Unleash Your Cybersecurity Potential
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Solve Challenges, Build Reputation, Secure the Future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/ctf" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              <a href="#learn_more" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ "clipPath": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
      </div>


      <div>



        <section className="bg-white" id="learn_more">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

            <div className="grid mt-6">
              <img className='rounded-lg' src="/images/image_1.jpg" alt="mockup" />
            </div>

            <div className="font-light text-gray-500 sm:text-lg">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                The Future of Cybersecurity Learning
              </h2>
              <p className="mb-4">

                CypherScroll is a decentralized platform where aspiring and professional cybersecurity enthusiasts can test their skills, solve Capture The Flag (CTF) challenges, and build a lasting reputation—all on-chain. Whether you're a beginner looking to break into cybersecurity or a seasoned professional sharpening your skills, CypherScroll is your gateway to mastering cybersecurity in a gamified, community-driven environment.

              </p>
            </div>

          </div>
        </section>



        <section className="bg-white">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

            <div className="font-light text-gray-500 sm:text-lg">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                What is CypherScroll?
              </h2>
              <p className="mb-4">

                CypherScroll is a blockchain-powered Dapp (Decentralized Application) that brings you hands-on learning through cybersecurity challenges. From cryptography and reverse engineering to web exploitation and network security, you'll find challenges of varying difficulty levels. Our CTFs are designed to push the boundaries of your problem-solving abilities while rewarding you with verifiable, on-chain credentials.

              </p>
            </div>

            <div className="grid mt-6">
              <img className='rounded-lg' src="/images/image_2.jpg" alt="mockup" />
            </div>
          </div>
        </section>


      </div>


      <hr />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight">Join CypherScroll Today</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Get started on your cybersecurity journey today and earn a verifiable, blockchain-based reputation that sets you apart. Are you ready to conquer the challenges and prove your skills?
            </p>
            <a href="/ctf" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
              Get started
            </a>
          </div>
        </div>
      </section>



      <footer className="bg-white sm:p-6">
            <div className="mx-auto max-w-screen-xl">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <a href="/" className="flex items-center">
                    <img src="/images/logo.png" className="mr-3 h-6 sm:h-16" alt="CipherScroll Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">CipherScroll</span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" className="hover:underline">CipherScroll™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                </div>
              </div>
            </div>
          </footer>


    </div>
  );
};

export default Home;
