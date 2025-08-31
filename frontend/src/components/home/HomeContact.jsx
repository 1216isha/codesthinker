import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'
import { toast } from 'react-toastify';


const HomeContact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_0qabf0m', 'template_ksnjrpa', form.current, {
                publicKey: 'ZkkXKoa_K5Yh1CDJJ',

            })
            .then(() => {
                toast('Email Send Successfully!')
            },
                (error) => {
                    error.toast('Failed...', error.text)
                },
            );
    };


    return (
        <div className='w-full bg-[#F9FAFB] mt-5 md:mt-10'>

            <div className='w-full md:w-[60%] m-auto mt-3 py-10 text-center'>
                <p className='text-gray-600'>let's Talk</p>
                <h1 className='text-2xl md:text-4xl font-bold md:px-0 px-6'><span className='text-[#0F00AA] '>Let's Collaborate</span> <span className='text-[#1E2939]'>and Innovate</span></h1>
            </div>

            <div className='flex flex-col md:flex-row md:px-0 px-6 justify-around'>
                <div className='w-full md:w-[36%] h-[450px] flex flex-col gap-8 md:px-0  md:py-0 py-4'>
                    <div className='w-full md:w-[100%] h-[200px] flex gap-4' data-aos="fade-right">
                        <div className='w-16 md:w-12'>
                            <img src="https://codesthinker.com/home/contactIcon1.png" alt="phone" />
                        </div>
                        <div className='w-full md:w-[400px]'>
                            <h3 className='font-bold text-xl'>Discuss Your Project</h3>
                            <p className='text-[16px] text-[#4A5565]'>Invite clients to share their ideas and requirements, fostering an open dialogue about potential collaborations.</p>
                        </div>

                    </div>


                    <div className='w-full md:w-[100%] h-[200px] flex gap-4' data-aos="fade-right">
                        <div className='w-16 md:w-12'>
                            <img src="https://codesthinker.com/home/contactIcon2.png" alt="consulation" />
                        </div>

                        <div className='w-full md:w-[400px]'>
                            <h3 className='font-bold text-xl'>Get a Free Consultation</h3>
                            <p className='text-[16px] text-[#4A5565]'>Offer a no-obligation consultation to  understand the client's needs and propose tailored solutions</p>
                        </div>

                    </div>


                    <div className='w-full md:w-[100%] h-[200px] flex gap-4' data-aos="fade-right">
                        <div className='w-16 md:w-12'>
                            <img src="https://codesthinker.com/home/contactIcon3.png" alt="anytime" />
                        </div>
                        <div className='w-full md:w-[400px]'>
                            <h3 className='font-bold text-xl'>Reach Us Anytime</h3>
                            <p className='text-[16px] text-[#4A5565]'>Provide multiple contact channels, ensuring clients can connect with you at their convenience.</p>
                        </div>

                    </div>


                </div>



                <div className='w-full md:w-[45%] h-[450px] md:h-[400px] md:px-6 px-5 md:py-2 mt-16 md:mt-0 rounded-[10px] shadow-xl' data-aos="fade-left">

                    <form ref={form} onSubmit={sendEmail}>
                        <h1 className='text-xl font-bold text-center mt-4 font-sans'>
                            CONTACT US
                        </h1>
                        <div className='flex md:flex-row flex-col justify-around'>
                            <input className='w-full md:w-[48%] h-[45px] border-[1.8px] mt-2 rounded-[5px] px-2' type="text" name='user_name' placeholder='Full Name' />
                            <input className='w-full md:w-[48%] h-[45px] border-[1.8px] mt-2 rounded-[5px] px-2' type="text" name='user_phone' placeholder='Phone Number' />
                        </div>
                        <input type="email" name='user_email' placeholder='Email' className='w-full md:w-[98%] h-[45px] py-2 px-2 border-[1.8px] rounded-[5px] mt-4 ml-1' />
                        <textarea type="text" name='message' placeholder='Message' className='w-full md:w-[98%] pb-20 px-2 py-2 border-[1.8px] rounded-[5px] mt-4 ml-1'></textarea>

                       <div className='flex justify-end'>
                         <button type='submit' value='send' className='btn w-[120px] h-[50px] mt-4 md:ml-[395px] bg-gradient-to-r from-[#070048] to-[#0E00A6] hover:bg-gradient-to-l hover:from-[#070048] hover:to-[#0E00A6] py-3 px-6 rounded-full text-white hover:transition-all duration-300'>Send</button>
                       </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default HomeContact