import React from 'react'
import './effect3d.css';
import Image from 'next/image';

const page = () => {
  return (
    <main className='bg-black w-full h-screen text-white p-2 ' >
      <section className='w-full'>
        {/* container */}
        <div className="effect-container w-full grid grid-cols-[1fr_3fr]">
        {/* <div className="flex-1">
            <div className=" ">
              <div className="flex flex-col gap-7">
                <h2 className="font-bold lg:text-[60px] text-[40px] ">WITH XFAI, TRADING WILL <span class="text-pink-600">NEVER</span>
                  HAVE TO
                  REMAIN CENTRALIZED</h2>
                <p className='font-normal '>XFai develops tooling by graphing the DeFi space to build <strong>game changing</strong> products to
                  benefit
                  users</p>
                <div className="large-gap">
                  <a href="#" className="px-8 py-2  rounded-md font-semibold bg-gradient-to-r from-pink-600 to-violet-500 mr-5 cursor-pointer">Whitepaper</a>
                  <a href="#" className="px-8 py-2  rounded-md font-semibold bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer  ">Watch video</a>
                </div>
              </div>
            </div>
          </div> 
            */}
           <div></div>
          <div className='w-full feature-grid rounded-sm feature-grid-left' >
            <a href="#" aria-label="Low fees">
              <Image src="/Fees.png" alt="Low fees" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="DLO-Brick">
              <Image src="/Brick.png" alt="DLO-Brick" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Safe and simple">
              <Image src="/Safe.png" alt="Safe and simple" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Synthetic curve">
              <Image src="/Sythetic.png" alt="Synthetic curve" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Anti slippage">
              <Image src="/Anti.png" alt="Anti slippage" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Dex liquidity oracle">
              <Image src="/DLO.png" alt="Dex liquidity oracle" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Liquidity difference force multiplier">
              <Image src="/Force.png" alt="Liquidity difference force multiplier" layout="fill" objectFit="cover" />
            </a>
          </div>
        </div>
      </section>

      <section className='w-full'>
        {/* container */}
        <div className='effect-container  w-full grid grid-cols-[3fr_1fr] '>
           {/* <div className="flex-1">
            <div className=" ">
              <div className="flex flex-col gap-7">
                <h2 className="font-bold lg:text-[60px] text-[40px] ">WITH XFAI, TRADING WILL <span class="text-pink-600">NEVER</span>
                  HAVE TO
                  REMAIN CENTRALIZED</h2>
                <p className='font-normal '>XFai develops tooling by graphing the DeFi space to build <strong>game changing</strong> products to
                  benefit
                  users</p>
                <div className="large-gap">
                  <a href="#" className="px-8 py-2  rounded-md font-semibold bg-gradient-to-r from-pink-600 to-violet-500 mr-5 cursor-pointer">Whitepaper</a>
                  <a href="#" className="px-8 py-2  rounded-md font-semibold bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer  ">Watch video</a>
                </div>
              </div>
            </div>
          </div> 
            */}
         
          <div className=' feature-grid rounded-sm  feature-grid-right ' >
            <a href="#" aria-label="Low fees">
              <Image src="/Fees.png" alt="Low fees" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="DLO-Brick">
              <Image src="/Brick.png" alt="DLO-Brick" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Safe and simple">
              <Image src="/Safe.png" alt="Safe and simple" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Synthetic curve">
              <Image src="/Sythetic.png" alt="Synthetic curve" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Anti slippage">
              <Image src="/Anti.png" alt="Anti slippage" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Dex liquidity oracle">
              <Image src="/DLO.png" alt="Dex liquidity oracle" layout="fill" objectFit="cover" />
            </a>
            <a href="#" aria-label="Liquidity difference force multiplier">
              <Image src="/Force.png" alt="Liquidity difference force multiplier" layout="fill" objectFit="cover" />
            </a>
          </div>
          <div></div>
        </div>
      </section>







    </main>
  )
}

export default page
