import React from 'react'
import { Link } from 'react-router-dom'

const ServicesHeader = () => {
    return (
        <div className='flex flex-col md:flex-row items-center pb-10 '>
            <div className='w-full md:w-[55%] h-[500px] px-6 py-20 md:pt-40 md:px-18 '>
                <h1 className='text-4xl md:text-6xl font-bold'>Perfect It <span className='text-[#0F00AA]'>Solutions</span> <br /> Business</h1>
                <p className='mt-4 mb-6  md:text-justify'>Perfect IT Solutions provides expert services in software development, IT consulting, cloud solutions, network security, data management, technical support, web design, and system integration to empower business growth and efficiency.</p>
                <div className='w-full h-[100px] mt-10 py-6'>
                    <Link to="http://localhost:5173/contact" className='bg-gradient-to-l from-[#060049] to-[#0E00A7] rounded-full py-4 px-7 font-bold text-white'>Contact Us</Link>
                </div>
            </div>

            <div className='w-[80%] md:w-[40%] 500px  md:pt-30 md:px-10 '>
                <img src="https://codesthinker.com/services/hero.png" alt="img" />
            </div>
        </div>

    )
}

export default ServicesHeader