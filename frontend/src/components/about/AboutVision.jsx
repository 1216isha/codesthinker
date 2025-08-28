import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const AboutVision = () => {
    return (
        <div className='w-full pt-10 pb-20 px-24 flex gap-8 mt-10'>
            <div className='w-full md:w-[45%] h-[500px] py-10 px-16'>
                <img src="https://codesthinker.com/about/img2.png" alt="" className='w-[100%] h-[100%] object-cover rounded-[8px]' />
            </div>

            <div className='w-full md:w-[55%] h-[400px] px-10'>
                <h6>WHO <span className='text-[#0F00AA] '>WE</span> ARE</h6>
                <h1 className='text-4xl font-bold mt-2'>YOUR <span className='text-[#0F00AA]'>VISION OUR</span> CODE</h1>
                <p className='mt-2 text-justify'>At Codes Thinker, we are a passionate team of developers, designers, and strategists dedicated to building smart, scalable, and user-focused digital solutions. We thrive on creativity, and cutting-edge technology to transform ideas into impactful products. With a commitment to quality, transparency, and client satisfaction, we don't just deliver code — we deliver value. Every project we take on reflects our belief in innovation, precision, and long-term partnerships.</p>

                <div className='w-full md:w-[220px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3'>
                    <FaArrowRight />
                    <span >Industry Expert Staff</span></div>

                <div className='w-full md:w-[220px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3'>
                    <FaArrowRight />
                    Client-Centric Focus</div>

                <div className='w-full md:w-[290px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3'>
                    <FaArrowRight />
                    Partner rather than Vendor</div>

                <div className='w-full md:w-[390px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3'>
                    <FaArrowRight />
                    Solutions Geared to Improve Productivity</div>


                <div className='w-full md:w-[450px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3'>
                   <FaArrowRight />
                    Collaborative Approach Throughout the Process</div>

            </div>
        </div>
    )
}

export default AboutVision