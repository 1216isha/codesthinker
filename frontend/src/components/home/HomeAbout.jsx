import React from 'react'

const HomeAbout = () => {
    return (
        <div className='w-full h-[600px] m-auto bg-[#E9F6FF] mt-10 py-20 px-32 flex flex-row '>
            <div className='w-[45%] h-[400px] ml-10'>
                <h1 className='text-5xl font-bold mt-2'  data-aos="fade-up-right">About<span className='text-[#0F00AA]'> Code's</span> Thinker</h1>
                <p className='mt-3'  data-aos="fade-up-right">We redefine excellence in business solution at Code's Thinker...</p>

                <div className='w-full md:w-[220px]  bg-[#E9F6FF] mt-4 shadow-2xl py-2 rounded-2xl flex items-center gap-4 px-3'  data-aos="fade-up-right">
                    <span className="w-[15px] h-[15px]  rounded-full bg-[linear-gradient(142deg,#18c8ff,#c608ff)]"></span>
                    <span >Industry Expert Staff</span></div>

                <div className='w-full md:w-[220px]  bg-[#E9F6FF] mt-4 shadow-2xl py-2 rounded-2xl flex items-center gap-4 px-3'  data-aos="fade-up-left">
                    <span className="w-[15px] h-[15px]  rounded-full bg-[linear-gradient(142deg,#18c8ff,#c608ff)]"></span>
                    Client-Centric Focus</div>

                <div className='w-full md:w-[270px]  bg-[#E9F6FF] mt-4 shadow-2xl py-2 rounded-2xl flex items-center gap-4 px-3'  data-aos="fade-up-right">
                    <span className="w-[15px] h-[15px]  rounded-full bg-[linear-gradient(142deg,#18c8ff,#c608ff)]"></span>
                    Partner rather than Vendor</div>

                <div className='w-full md:w-[390px]  bg-[#E9F6FF] mt-4 shadow-2xl py-2 rounded-2xl flex items-center gap-4 px-3' data-aos="fade-up-left">
                    <span className="w-[15px] h-[15px]  rounded-full bg-[linear-gradient(142deg,#18c8ff,#c608ff)]"></span>
                    Solutions Geared to Improve Productivity</div>


                <div className='w-full md:w-[450px]  bg-[#E9F6FF] mt-4 shadow-2xl py-2 rounded-2xl flex items-center gap-4 px-3' data-aos="fade-up-right">
                    <span className="w-[15px] h-[15px]  rounded-full bg-[linear-gradient(142deg,#18c8ff,#c608ff)]"></span>
                    Collaborative Approach Throughout the Process</div>
            </div>


            <div className='w-[43%] bg-amber-950 h-[450px] rounded-2xl ml-16'  data-aos="fade-up-left">
                <img className='w-[100%] h-[100%] object-cover rounded-2xl' src="https://codesthinker.com/about/about2.jpg" alt="" />
            </div>
        </div>
    )
}

export default HomeAbout    