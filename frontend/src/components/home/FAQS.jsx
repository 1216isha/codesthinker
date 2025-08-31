import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const FAQS = () => {
    const faqs = [
        {
            question: "What Services do you offer?",
            answer: "We offer web development, data science solutions, WordPress customization, and UI/UX design tailored to client needs."
        },
        {
            question: "How long does a project usually take?",
            answer: "Project timelines vary but typically range from 2 to 6 weeks depending on complexity and requirements."
        },
        {
            question: "Do you offer post-launch support?",
            answer: "Yes, we provide maintenance, updates, and technical support after your project goes live."
        },
        {
            question: "Can I get a custom design for my brand?",
            answer: "Absolutely. We create custom designs that align with your brand identity and audience."
        },
        {
            question: "How do I get started with a project?",
            answer: "Simply contact us through the form or email. We'll schedule a free consultation to understand your goals."
        }
    ]

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        console.log(index)
        setActive(index === active ? null : index)
    }

    return (
        <div className='w-full md:w-[100%] bg-[#F9FAFB] py-4 md:px-10 px-2 pt-10'>
            <div className='w-full md:w-[500px] h-[100px] m-auto py-3 text-center'>
                <p className='text-[#4A5565] '>Have You Any Question</p>
                <h1 className='text-2xl md:text-4xl font-bold' data-aos="zoom-in"><span className='text-[#0F00AA] '>Frequently</span> Asked Questions</h1>
            </div>


            <div className='flex flex-col md:flex-row justify-around md:gap-0 gap-10 mt-10'>
                <div className='w-full md:w-[50%] flex flex-col gap-4 rounded-2xl '>
                    {
                        faqs.map((value, index) => (
                            <div className='' key={index}>
                                <div className='flex justify-between md:gap-0 ga-10 items-center text-[18px] font-semibold w-full md:w-[600px] bg-white hover:bg-gray-100 py-4 px-4 rounded-[8px] mt-2 shadow-2xl' data-aos="fade-right" onClick={() => handleToggle(index)}>
                                    <h2>{value.question}</h2>
                                    {active === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                {active === index && <p className='w-full md:w-[600px] py-2 px-3  border-l-4 border-blue-700 bg-white rounded-b-2xl transition-all duration-300'>{value.answer}</p>}
                            </div>
                        ))
                    }
                </div>
                <div className='w-full md:w-[35%] md:h-[400px] bg-amber-200 rounded-[10px]' data-aos="flip-right">
                    <img src="https://codesthinker.com/home/faqs.png" alt="" className='w-[100%] h-[100%] object-cover rounded-[10px]' />
                </div>
            </div>


        </div>
    )
}

export default FAQS