import React, { useEffect } from 'react'
import people from '../../assets/homeImages/people.png'
import lightbulb from '../../assets/homeImages/lightbulb.png'
import tech from '../../assets/homeImages/tech.png'
import support from '../../assets/homeImages/support.png'




const StandOut = () => {


    return (
        <div className='w-full bg-[#E8F6FF] m-auto py-6 md:py-14 mt-4 md:mt-10 ' data-aos="fade-right">

            <div>
                <h1 className='md:text-4xl text-2xl font-bold text-[#0F00AA] text-center' data-aos="zoom-in">What Makes Us Stand Out?</h1>
            </div>

            <div className='flex md:flex-row flex-col gap-6 px-10 md:px-24 py-4 md:py-6 w-[80%]  md:w-[90%] m-auto justify-around'>
                <div className='w-full h-[200px] md:h-[230px]  md:w-[250px] bg-white rounded-4xl shadow-2xl hover:bg-[#0F00A9] hover:text-white transition-all duration-400'>
                    <div className='w-[75px] h-[75px]  bg-gradient-to-r from-[#0044C1] to-[#008FEB] py-4 px-4 rounded-full m-auto mt-6'>
                        <img src={lightbulb} alt="lightbulb" />
                    </div>
                    <h3 className='text-center font-bold mt-3'>Custom Web <br />Experiences</h3>
                </div>
                <div className='w-full h-[200px] md:h-[230px] md:w-[250px] bg-white rounded-4xl shadow-2xl hover:bg-[#0F00A9] hover:text-white transition-all duration-400'>
                    <div className='w-[75px] h-[75px]  bg-gradient-to-r from-[#0044C1] to-[#008FEB] py-4 px-4 rounded-full m-auto mt-6'>
                        <img src={people} alt="people" className='w-14' />
                    </div>
                    <h3 className='text-center font-bold mt-3'>Innovative UI/UX <br /> Design</h3>
                </div>
                <div className='w-full h-[200px] md:h-[230px] md:w-[250px] bg-white rounded-4xl shadow-2xl hover:bg-[#0F00A9] hover:text-white transition-all duration-400'>
                    <div className='w-[75px] h-[75px]  bg-gradient-to-r from-[#0044C1] to-[#008FEB] py-4 px-4 rounded-full m-auto mt-6'>
                        <img src={tech} alt="tech" />
                    </div>
                    <h3 className='text-center font-bold mt-3'>Scalable Tech <br /> Solutions</h3>
                </div>
                <div className='w-full h-[200px] md:h-[230px] md:w-[250px] bg-white rounded-4xl shadow-2xl hover:bg-[#0F00A9] hover:text-white transition-all duration-400'>
                    <div className='w-[75px] h-[75px]  bg-gradient-to-r from-[#0044C1] to-[#008FEB] py-4 px-4 rounded-full m-auto mt-6'>
                        <img src={support} alt="support" />
                    </div>
                    <h3 className='text-center font-bold mt-3'>24/7 Support & <br /> Maintenance</h3>
                </div>
            </div>

        </div>
    )
}

export default StandOut