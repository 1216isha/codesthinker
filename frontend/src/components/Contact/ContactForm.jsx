import { IoMdSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";




const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0qabf0m', 'template_ksnjrpa', form.current, {
        publicKey: 'ZkkXKoa_K5Yh1CDJJ',
      })
      .then(
        () => {
          toast('SUCCESS!');
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='w-full py-16 px-20'>
      <div className='mt-4'>
        <h1 className='text-6xl font-bold text-center mt-10'>Get In <span className='text-[#0F00AA]'>Touch</span></h1>
      </div>

      <div className='flex gap-10 mt-14'>

        <div className='w-full md:w-[50%] h-[620px] p-6'>
          <h1 className='text-4xl font-bold px-5'>Ready To Turn Your Vision Into Reality?</h1>
          <p className='mt-4 text-justify px-5'>Want to blast your business off like a rocket? Tojo Global's got a secret weapon for you: an amazing custom Marketing, Management, Design, Development & Crypto listing plan which will turn heads and grow your business faster than ever.</p>

          <div className='flex gap-4 flex-col mt-4 font-bold' >
            <div className='w-full md:w-[600px] h-[80px] px-4 flex gap-4'>
              <div className='w-[55px] h-[55px] rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] mt-3'>
                <FaPhoneAlt className="m-auto text-2xl mt-4 text-white" />
              </div>
              <div>
                <p className='mt-7'>info@codesthinker.com</p>
              </div>
            </div>
            <div className='w-full md:w-[600px] h-[80px] py-3 px-4 flex gap-4'>
              <div className='w-[55px] h-[55px] rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] '>
                <FaEnvelope className="m-auto text-2xl mt-4 text-white" />
              </div>
              <div>
                <p className='mt-5'>info@codesthinker.com</p>
              </div>
            </div>
            <div className='w-full md:w-[600px] h-[80px] py-2 px-4 flex gap-4'>
              <div className='w-[55px] h-[55px] rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] mt-1'>
                <IoLocationSharp className="m-auto text-2xl mt-4 text-white" />
              </div>
              <div>
                <p className='mt-3'>Bartle House 9 Oxford Court, Manchester M23WQ <br /> United Kingdom(Regional Office)</p>
              </div>
            </div>
            <div className='w-full md:w-[600px] h-[80px] py-2 px-4 flex gap-4'>
              <div className='w-[55px] h-[55px] rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] mt-1'>
                <IoLocationSharp className="m-auto text-2xl mt-4 text-white" />

              </div>
              <div>
                <p className='mt-3'>Hassan Manzil Basement Goheer Town <br /> Bahawalpur (Global Delivery Center)</p>
              </div>
            </div>

          </div>

        </div>

        <div className='w-full md:w-[50%] h-[600px] py-6 px-4 '>

          <form ref={form} onSubmit={sendEmail}>
            <h1 className='text-3xl font-bold text-center mt-4 font-sans'>
              Book a Free Consultation
            </h1>
            <div className='flex flex-col  justify-around'>
              <label className='font-bold mt-4'>Full Name *</label>
              <input className='w-full md:w-[98%] h-[45px] border-[1.8px] mt-2 rounded-[5px] px-2' name='user_name' type="text" placeholder='Full Name' />
              <label className='font-bold mt-4'>Work Email *</label>
              <input className='w-full md:w-[98%] h-[45px] border-[1.8px] mt-2 rounded-[5px] px-2' name='user_email' type="email" placeholder='Working Email' />
              <label className='font-bold mt-4'>Subject</label>
              <input type="text" placeholder='Enetr your Subject' name='subject' className='w-full md:w-[98%] h-[45px] py-2 px-2 border-[1.8px] rounded-[5px] mt-4 ml-1' />
              <label className='font-bold mt-4'>Message</label>
              <input type="text" placeholder='Describe your message here' name='message' className='w-full md:w-[98%] pb-20 px-2 py-2 border-[1.8px] rounded-[5px] mt-4 ml-1 ' />
            </div>
            <div className='flex gap-3 justify-center items-center text-start w-full md:w-[130px] h-[50px] mt-4  py-3 px-3 rounded-full text-white hover:transition-all duration-300 bg-gradient-to-r from-[#070048] to-[#0E00A6] hover:bg-gradient-to-l hover:from-[#070048] hover:to-[#0E00A6]'>
              <button className='btn ' type="submit" value="Send">SUBMIT</button>
              <IoMdSend />
            </div>
          </form>

        </div>

      </div>

      <div className='w-[330px] h-[45px] pl-8 flex justify-around gap-3'>

        {/* Facebook */}
        <div className='p-[2px] rounded-full bg-gradient-to-l from-blue-500 to-purple-500 hover:scale-105 transition-all duration-300'>
          <div className='w-[40px] h-[40px] bg-[#0A043C] rounded-full flex items-center justify-center hover:bg-white'>
            <FaFacebookF className='text-2xl text-white hover:text-black' />
          </div>
        </div>

        {/* Twitter */}
        <div className='p-[2px] rounded-full bg-gradient-to-l from-sky-400 to-blue-600 hover:scale-105 transition-all duration-300'>
          <div className='w-[40px] h-[40px] bg-[#0A043C] rounded-full flex items-center justify-center hover:bg-white'>
            <FaTwitter className='text-2xl text-white hover:text-black' />
          </div>
        </div>

        {/* Instagram */}
        <div className='p-[2px] rounded-full bg-gradient-to-l from-pink-500 to-yellow-400 hover:scale-105 transition-all duration-300'>
          <div className='w-[40px] h-[40px] bg-[#0A043C] rounded-full flex items-center justify-center hover:bg-white'>
            <FaInstagram className='text-2xl text-white hover:text-black' />
          </div>
        </div>

        {/* LinkedIn */}
        <div className='p-[2px] rounded-full bg-gradient-to-l from-blue-600 to-cyan-400 hover:scale-105 transition-all duration-300'>
          <div className='w-[40px] h-[40px] bg-[#0A043C] rounded-full flex items-center justify-center hover:bg-white'>
            <FaLinkedinIn className='text-2xl text-white hover:text-black' />
          </div>
        </div>

      </div>




    </div>
  )
}

export default ContactForm