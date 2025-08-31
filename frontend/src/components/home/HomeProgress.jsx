import React from 'react'

const HomeProgress = () => {
    return (
        <div className='w-full md:h-[500px] bg-[#F3F4F6] m-auto mt-10'>
            <div className='w-full md:w-[60%] m-auto text-center py-14'>
                <h1 className='text-3xl md:text-5xl font-bold'  data-aos="fade-left">Our <span className='text-[#0F00AA] '>Progress</span></h1>
                <p className='text-[20px] mt-6 text-[#1B212A] md:px-0 px-4'  data-aos="fade-right">TOJO GLOBAL connects your business directly to your target audience, eliminating the need to search for clients. With us, they'll find their way to you.</p>
            </div>

            <div className='flex md:flex-row flex-col justify-around md:gap-0 gap-6 px-20 pb-10 md:pb-0 md:px-40 transition-all duration-400'>

                <div className='w-full md:w-[200px] bg-gradient-to-r from-[#12135F] to-[#3E55C1] h-[170px] rounded-2xl hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-white'  data-aos="fade-up">
                    <h3 className='font-bold text-4xl text-white text-center mt-12'>4+</h3>
                    <p className='text-white text-center mt-2'>Years of Experience</p>
                </div>

                <div className='w-full md:w-[200px] bg-gradient-to-r from-[#12135F] to-[#3E55C1] h-[170px] rounded-2xl hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-white'  data-aos="fade-down">
                    <h3 className='font-bold text-4xl text-white text-center mt-12'>50+</h3>
                    <p className='text-white text-center mt-2'>Satisfied Clients</p>
                </div>

                <div className='w-full md:w-[200px] bg-gradient-to-r from-[#12135F] to-[#3E55C1] h-[170px] rounded-2xl hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-white'  data-aos="fade-up">
                    <h3 className='font-bold text-4xl text-white text-center mt-12'>17+</h3>
                    <p className='text-white text-center mt-2'>Countries We Operate</p>
                </div>

                <div className='w-full md:w-[200px] bg-gradient-to-r from-[#12135F] to-[#3E55C1] h-[170px] rounded-2xl hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-white'  data-aos="fade-down">
                    <h3 className='font-bold text-4xl text-white text-center mt-12'>$200K+</h3>
                    <p className='text-white text-center mt-2'>Managed Marketing Fund</p>
                </div>

                <div className='w-full md:w-[200px] bg-gradient-to-r from-[#12135F] to-[#3E55C1] h-[170px] rounded-2xl hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-white'  data-aos="fade-up">
                    <h3 className='font-bold text-4xl text-white text-center mt-12'>$2.9M+</h3>
                    <p className='text-white text-center mt-2'>Clients Gain</p>
                </div>

            </div>

        </div>
    )
}

export default HomeProgress