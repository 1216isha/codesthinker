

import React from 'react'
import { FaBitcoin, FaLock } from "react-icons/fa";
import { MdBusinessCenter, MdRocketLaunch, MdIntegrationInstructions, MdLightbulb } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";


const KeyFeatures = () => {
  return (
    <div className='w-full bg-[#F3F4F6] mt-20 h-[500px]'>
      <div className='w-full md:w-[60%] m-auto h-[100%] flex relative'>

        <div className='absolute left-32 top-1/2 -translate-y-1/2' data-aos="fade-right">
          <div className='w-[300px] h-[300px] rounded-full shadow-2xl flex items-center justify-center border'>
            <h1 className='text-3xl font-bold text-center leading-snug'>
              KEY <br /> FEATURES
            </h1>
          </div>
        </div>


        <div className='absolute left-[470px] top-[40px] flex flex-col gap-8'>

          <div className='w-[400px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-0 left-[-100px] hover:text-white' data-aos="fade-left">
            <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black '>
              <FaBitcoin className='text-black text-lg hover:text-white' />
            </div>
            <p className='font-semibold px-10 '>Blockchain Expertise</p>
          </div>

          <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[70px] left-[-35px] hover:text-white' data-aos="fade-left">
            <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
              <MdBusinessCenter className='text-black text-2xl hover:text-white' />
            </div>
            <p className='font-semibold px-10'>Small Business Support</p>
          </div>

          <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[140px] left-[30px] hover:text-white' data-aos="fade-left">
            <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
              <FaLock className='text-black text-lg hover:text-white' />
            </div>
            <p className='font-semibold px-10'>Crypto Solutions</p>
          </div>

          <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[210px] left-[30px] hover:text-white' data-aos="fade-left">
            <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
              <MdRocketLaunch className='text-black text-2xl hover:text-white' />
            </div>
            <p className='font-semibold px-10'>Startup Business</p>
          </div>

          <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white border hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border-b-3 absolute top-[280px] left-[-35px] hover:text-white' data-aos="fade-left">
            <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
              <GoArrowSwitch className='text-black text-2xl hover:text-white' />
            </div>
            <p className='font-semibold px-10'>B2B Integration</p>
          </div>

          <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[350px] left-[-100px] hover:text-white' data-aos="fade-left">
            <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
              <MdLightbulb className='text-black text-2xl hover:text-white' />
            </div>
            <p className='font-semibold  px-10'>Fintech Innovation</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
