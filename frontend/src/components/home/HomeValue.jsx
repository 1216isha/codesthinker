import React from 'react'
import Integrity from '../../assets/homeImages/Integrity.png'
import trust from '../../assets/homeImages/trust.png'
import Excellence from '../../assets/homeImages/Excellence.png'




const HomeValue = () => {
    return (
        <div className='w-full md:h-[500px] m-auto mt-6 md:mt-10 flex md:flex-row flex-col justify-around md:px-32 px-4 md:py-4 py-2'>
            <div className='w-full md:w-[50%] h-[100%]'>
                <h1 className='text-3xl  md:text-5xl font-bold'>OUR <span className='text-[#0F00AA]'>VALUE</span></h1>
                <h2 className='text md:text-2xl text-xl font-semibold mt-3'>A melting pot for the best ideas</h2>


                <div className='flex flex-col gap-3 mt-4'  data-aos="fade-right">

                    <div className='w-full md:w-[100%] h-[100px] mt-2 flex flex-row'>
                        <div className='w-[100px] h-[60px] md:w-[70px] md:h-[70px] bg-[#060044] mt-4 md:mt-2.5 rounded-xl'>
                            <img src={Integrity} alt="" className='w-10 md:w-13 m-auto  mt-2'/>
                        </div>
                        <div className='flex flex-col px-4 py-2 text-[19px]'>
                            <h3 className='md:text-2xl text-xl font-bold'>Integrity</h3>
                            <p className='text-[17px]'>We hold ourselves to a strong ethical and moral code.</p>
                        </div>
                    </div>

                    <div className='w-full h-[120px] md:w-[100%] md:h-[100px] mt-2 flex flex-row'>
                        <div className='w-[130px] h-[60px] md:w-[70px] md:h-[70px] bg-[#060044] mt-4 md:mt-2.5 rounded-xl'>
                             <img src={trust} alt="" className='w-10 md:w-13 m-auto mt-2.5 md:mt-2'/>
                        </div>
                        <div className='flex flex-col px-4 py-2 text-[19px]'>
                            <h3 className='text-xl md:text-2xl font-bold'>Trust</h3>
                            <p className='text-[17px]'>We are dependable, loyal, and hardworking to achieve the same goal.</p>
                        </div>

                    </div>

                    <div className='w-full h-[120px] md:w-[100%] md:h-[100px] mt-2 flex flex-row'>
                        <div className='w-[100px] h-[60px] md:w-[70px] md:h-[70px] bg-[#060044] mt-2.5 rounded-xl'>
                            <img src={Excellence} alt="" className='w-10 md:w-13 m-auto mt-2.5 md:mt-2 text-[10px]'/>
                        </div>
                        <div className='flex flex-col px-4 py-2 text-[19px]'>
                            <h3 className='text-xl md:text-2xl font-bold'>Excellence</h3>
                            <p className='text-[17px]'>We consistently strive to deliver high-quality work without <br /> room for error.</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className='w-full md:w-[38%] h-[100%]  md:mt-24'  data-aos="fade-down">
                <img className='mt-10 md:mt-14' src="https://codesthinker.com/home/Home-Page-Our-Value-Services.png" alt="" />
            </div>
        </div>
    )
}

export default HomeValue