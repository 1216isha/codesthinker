import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const AboutVision = () => {
    return (
        <div className='w-full md:pt-10 md:pb-20  md:px-24 flex md:flex-row flex-col gap-8 md:mt-10'>
            <div className='w-full md:w-[45%] md:h-[500px] h-[350px] py-10 md:px-16 px-4' data-aos="fade-right">
                <img src="https://codesthinker.com/about/img2.png" alt="" className='w-[100%] h-[100%] object-cover rounded-[8px]' />
            </div>

            <div className='w-full md:w-[55%] md:h-[400px] md:pb-0 pb-10 px-10'>
                <h6 data-aos="fade-left">WHO <span className='text-[#0F00AA]'>WE</span> ARE</h6>
                <h1 data-aos="fade-left" className='text-4xl font-bold mt-2'>YOUR <span className='text-[#0F00AA]'>VISION OUR</span> CODE</h1>
                <p data-aos="fade-left" className='mt-2 text-justify'>At Codes Thinker, we are a passionate team of developers, designers, and strategists dedicated to building smart, scalable, and user-focused digital solutions. We thrive on creativity, and cutting-edge technology to transform ideas into impactful products. With a commitment to quality, transparency, and client satisfaction, we don't just deliver code — we deliver value. Every project we take on reflects our belief in innovation, precision, and long-term partnerships.</p>

                <div className='w-full md:w-[220px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3' data-aos="fade-right">
                    <FaArrowRight />
                    <span >Industry Expert Staff</span></div>

                <div className='w-full md:w-[220px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3' data-aos="fade-left">
                    <FaArrowRight />
                    Client-Centric Focus</div>

                <div className='w-full md:w-[290px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3' data-aos="fade-right">
                    <FaArrowRight />
                    Partner rather than Vendor</div>

                <div className='w-full md:w-[390px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3' data-aos="fade-left">
                    <FaArrowRight />
                    Solutions Geared to Improve Productivity</div>


                <div className='w-full md:w-[450px] mt-4 shadow-xl py-2 rounded-2xl flex items-center gap-4 px-3' data-aos="fade-right">
                    <FaArrowRight />
                    Collaborative Approach Throughout the Process</div>

            </div>
        </div>
    )
}

export default AboutVision