import React, { useState } from 'react'
const HomeServices = () => {
    const services = [
        {
            title: "Development",
            tags: ["Custom Development", "Web App Development", "Mobile App Development", "Blockchain Dev", "Crypto Token Dev", "Wordpress Dev"]
        },
        {
            title: "Management",
            tags: ["Community Management", "Social Media Management", "Social Media Moderation"]
        },
        {
            title: "Marketing",
            tags: ["SEO (On-Page)", "SEO (Off-Page)", "Influencer Marketing", "Content Marketing", "Content Marketing", "Email Campaigns"]
        },
        {
            title: "Graphics & Visuals",
            tags: ["Logo Design", "Stationary Design", "Social Media Design", "UI/UX Design", "Web Design"]
        },
        {
            title: "Video Editing",
            tags: ["Motion Graphics", "Youtube Video", "Brand Video", "Podcast Video", "Documentary"]
        },
        {
            title: "Content Writing",
            tags: ["Web Content Writing", "Product Description", "White Paper Content", "Blog Writing", "Case Studies"]
        }


    ]

    const [selectedService, setSelectedService] = useState(services[0]);
    console.log(selectedService.title)
    const handleSelectSerivce = (service) => {
        setSelectedService(service);
    }

    return (
        <div className='w-full m-auto mt-4 md:mt-10 md:px-6 px-2 py-4'>
            <div className=' md:w-[55%] w-[90%] m-auto'>
                <h1 className='md:text-5xl text-4xl font-bold mt-3 text-center'  data-aos="fade-down"><span className='text-[#0F00AA]'>Services </span> We Offer</h1>
                <p className=' mt-6  md:text-[19px] text-center'>TOJO GLOBAL offers crypto solutions, targeted marketing, impactful design, custom development, and professional video editing to elevate your brand.</p>
            </div>

            <div className='w-full mt-4 flex flex-col md:flex-row items-center justify-center'>
                <div className=' md:w-[50%] w-[330px] m-auto mt-4'  data-aos="flip-left">
                    <ul className='flex flex-col gap-4  md:px-16 md:ml-30'>
                        {
                            services.map((service, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelectSerivce(service)}
                                    className={`cursor-pointer mx-auto md:mx-0 text-center w-full md:w-[70%] hover:bg-gradient-to-r from-[#06004C] to-[#0F00A8] hover:text-white py-2 md:text-2xl text-xl rounded-full font-semibold border-2 border-gray-200  ${selectedService.title === service.title ? 'bg-gradient-to-r from-[#06004C] to-[#0F00A8] text-white' : 'bg-white text-black transition-all duration-200'}`}
                                >
                                    {service.title}
                                </li>

                            ))
                        }

                    </ul>
                </div>
                <div className='w-[350px] md:w-[50%]  mt-8 px-2'  data-aos="flip-right">
                    <img src='https://codesthinker.com/home/servicesImage.png' alt='' />
                    {
                        selectedService &&
                        <div className='flex flex-col md:flex-row md:flex-wrap gap-7 p-2 items-center mt-7 md:mr-10'>
                            {
                                selectedService.tags.map((tag, index) => (
                                    <p className='text-[17px] font-semibold'>{tag}</p>

                                ))
                            }
                        </div>
                    }

                </div>
            </div>

            {/* 
            <div className='w-full md:w-[98%] h-[420px] mt-4 m-auto flex justify-between'>
                <div className='w-full md:w-[40%] h-[100%]  flex gap-3 flex-col'>
                    <div className='w-full md:w-[410px] h-[200px] px-6 py-3 rounded-4xl border-2 border-gray-300 shadow-xl text-2xl font-bold hover:bg-[#0A0072] hover:text-white'>Development</div>
                    <div className='w-full md:w-[410px] h-[200px] px-6 py-3 rounded-4xl border-2 border-gray-300 shadow-xl text-2xl font-bold hover:bg-[#0A0072] hover:text-white'>Management</div>
                    <div className='w-full md:w-[410px] h-[200px] px-6 py-3 rounded-4xl border-2 border-gray-300 shadow-xl text-2xl font-bold hover:bg-[#0A0072] hover:text-white'>Marketing</div>
                    <div className='w-full md:w-[410px] h-[200px] px-6 py-3 rounded-4xl border-2 border-gray-300 shadow-xl text-2xl font-bold hover:bg-[#0A0072] hover:text-white'>Graphics & Visuals</div>
                    <div className='w-full md:w-[410px] h-[200px] px-6 py-3 rounded-4xl border-2 border-gray-300 shadow-xl text-2xl font-bold hover:bg-[#0A0072] hover:text-white'>Video Editing</div>
                    <div className='w-full md:w-[410px] h-[200px] px-6 py-3 rounded-4xl border-2 border-gray-300 shadow-xl text-2xl font-bold hover:bg-[#0A0072] hover:text-white'>Content Writing</div>
                </div>

                <div className='w-full md:w-[50%] h-[300px]'>
                    <img className='w-[100%] h-[100%] object-cover rounded-3xl' src="https://codesthinker.com/home/servicesImage.png" alt="" />
                    
                </div>
            </div> */}


        </div>
    )
}

export default HomeServices