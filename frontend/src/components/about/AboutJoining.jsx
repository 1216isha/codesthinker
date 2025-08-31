import React from 'react'

const AboutJoining = () => {
    return (
        <div className='w-full pt-18 pb-14 px-2 md:px-20 '>
            <div>
                <h1 className='md:text-4xl text-2xl font-bold text-[#0F00AA] md:w-[700px] h-[100px] m-auto text-center md:mt-4' data-aos="fade-down">Your Path to Joining Code's Thinker</h1>
            </div>

            <div className='flex md:flex-row flex-col justify-around gap-8 px-10 py-4'>
                <div className='w-full md:w-[250px] md:h-[250px]' data-aos="fade-down">
                    <div className='w-[200px] h-[200px] md:w-[180px] md:h-[180px] flex flex-col rounded-full m-auto border-3 hover:border-dotted'>
                        <img src="https://codesthinker.com/about/submit.jpg" alt="" className='rounded-full w-[100%]  h-[100%] object-cover hover:scale-90 transition-transform duration-300' />
                    </div>
                    <div>
                        <h3 className='font-bold text-xl text-center mt-3'>1- Submit Application</h3>
                    </div>
                </div>


                <div className='w-full md:w-[250px] h-[250px]' data-aos="fade-up">
                    <div className='w-[200px] md:w-[180px] md:h-[180px] h-[200px] flex flex-col rounded-full m-auto border-3 hover:border-dotted'>
                        <img src="https://codesthinker.com/about/Experts.jpg" alt="" className='rounded-full w-[100%]  h-[100%] object-cover hover:scale-90 transition-transform duration-300' />
                    </div>
                    <div>
                        <h3 className='font-bold text-xl text-center mt-3'>1- Submit Application</h3>
                    </div>
                </div>


                <div className='w-full md:w-[250px] h-[250px]' data-aos="fade-down">
                    <div className='w-[200px] md:w-[180px] md:h-[180px] h-[200px] flex flex-col rounded-full m-auto border-3 hover:border-dotted'>
                        <img src="https://codesthinker.com/about/personal.jpg" alt="" className='rounded-full w-[100%]  h-[100%] object-cover hover:scale-90 transition-transform duration-300' />
                    </div>
                    <div>
                        <h3 className='font-bold text-xl text-center mt-3'>1- Submit Application</h3>
                    </div>
                </div>


                <div className='w-full md:w-[250px] h-[250px' data-aos="fade-up">
                    <div className='w-[200px] md:w-[180px] md:h-[180px] h-[200px] flex flex-col rounded-full m-auto border-3 hover:border-dotted'>
                        <img src="https://codesthinker.com/about/seamless.jpg" alt="" className='rounded-full w-[100%]  h-[100%] object-cover hover:scale-90 transition-transform duration-300' />
                    </div>
                    <div>
                        <h3 className='font-bold text-xl text-center mt-3'>1- Submit Application</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutJoining