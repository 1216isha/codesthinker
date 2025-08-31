import React from 'react'
import { useParams } from 'react-router-dom'
import services from './ServicesData';




const ServicesDetail = () => {
    const {id} = useParams();
    const service = services.filter(s=>s.id===Number(id))[0];
    return (
        <div className='w-full md:py-20 md:px-20'>
            <div className='flex md:flex-row flex-col md:py-20 py-18 justify-around mt-6'>
                <div className='w-[90%] m-auto md:m-0 md:w-[40%] md:h-[430px] h-[250px] rounded-[10px]' data-aos="fade-right">
                    <img src={service.image} alt="" className='w-[100%] h-[100%]  object-cover rounded-[10px]' />
                </div>

                <div className='w-full md:w-[45%] md:py-24 py-10 md:px-10 px-6 md:h-[450px]' data-aos="fade-left">
                    <h1 className='font-bold md:text-4xl text-2xl'>{service.title}</h1>
                    <p className='mt-4 text-[17px] md:text-justify justify-start'>{service.desc_long}</p>
                </div>
            </div>

            <div className='md:mt-12'>
                <div className='w-full md:h-[100px] md:px-12 px-6 md:py-6' data-aos="fade-down">
                    <h3 className='md:text-2xl text-xl font-bold'>Why Choose Us for {service.title}?</h3>
                    <p className='mt-4 text-gray-700'>We offer expert-level app development services with results that speak for themselves.</p>
                </div>
            </div>





            <div className='md:px-10 px-4 w-full md:h-[300px] mt-4 flex gap-6 flex-wrap py-6 text-white'>

                {
                    service?.detail?.map((data, index) => (
                        <div className='w-full md:w-[400px] h-[120px] mb-3 rounded-[10px] bg-gradient-to-r from-[#090D51] to-[#165899] py-4 px-6 hover:shadow-[0_4px_30px_rgba(56,189,248,0.7)] transition duration-300 hover:-translate-y-3' data-aos="fade-up">
                            <h3 className='font-bold text-xl'>{data.title}</h3>
                            <p className='mt-3'>{data.description}</p>
                        </div>
                    ))
                }



            </div>

        </div>
    )
}

export default ServicesDetail