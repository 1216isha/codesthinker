import React from 'react'
import { useParams } from 'react-router-dom'
import services from './ServicesData';

// const material = [
//     {
//         title: 'Cross-platform support',
//         desc: 'Our cross-platform support service is designed to exceed expectations.',
//     },
//     {
//         title: 'Smooth UX/UI',
//         desc: 'Our smooth ux/ui service is designed to exceed expectations.',
//     },
//     {
//         title: 'Secure coding',
//         desc: 'Our secure coding service is designed to exceed expectations.',
//     },
//     {
//         title: 'Push notifications',
//         desc: 'Our push notifications service is designed to exceed expectations.',
//     },
//     {
//         title: 'App store deployment',
//         desc: 'Our app store deployment service is designed to exceed expectations.',
//     },
// ]



const ServicesDetail = () => {
    const {id} = useParams();
    const service = services.filter(s=>s.id===Number(id))[0];
    return (
        <div className='w-full py-20 px-20'>
            <div className='flex justify-around mt-6'>
                <div className='w-full md:w-[45%] h-[450px] rounded-[10px]'>
                    <img src={service.image} alt="" className='w-[100%] h-[100%]  object-cover rounded-[10px]' />
                </div>

                <div className='w-full md:w-[45%] py-24 px-10 h-[450px]'>
                    <h1 className='font-bold text-4xl'>{service.title}</h1>
                    <p className='mt-4 text-xl text-justify'>{service.desc_long}</p>
                </div>
            </div>

            <div className='mt-12'>
                <div className='w-full h-[100px] px-12 py-6'>
                    <h3 className='text-2xl font-bold'>Why Choose Us for {service.title}?</h3>
                    <p className='mt-4 text-gray-700'>We offer expert-level app development services with results that speak for themselves.</p>
                </div>
            </div>





            <div className='px-10 w-full h-[300px] mt-4 flex gap-6 flex-wrap py-6 text-white'>

                {
                    service?.detail?.map((data, index) => (
                        <div className='w-full md:w-[400px] h-[120px] mb-3 rounded-[10px] bg-gradient-to-r from-[#090D51] to-[#165899] py-4 px-6 hover:shadow-[0_4px_30px_rgba(56,189,248,0.7)] transition duration-300 hover:-translate-y-3'>
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