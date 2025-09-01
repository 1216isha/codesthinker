import { IoMdSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0qabf0m", "template_ksnjrpa", form.current, {
        publicKey: "ZkkXKoa_K5Yh1CDJJ",
      })
      .then(
        () => toast("SUCCESS!"),
        (error) => toast.error("FAILED...", error.text)
      );
  };

  return (
    <div className="w-full py-16 md:px-20 px-6">
      {/* Heading */}
      <h1
        className="md:text-6xl text-4xl font-bold text-center mt-6"
        data-aos="fade-down"
      >
        Get In <span className="text-[#0F00AA]">Touch</span>
      </h1>

      {/* Main Wrapper */}
      <div className="flex flex-col md:flex-row gap-10 md:mt-14 mt-8">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-6 py-6">
          <h2
            className="md:text-4xl text-2xl font-bold"
            data-aos="fade-right"
          >
            Ready To Turn Your Vision Into Reality?
          </h2>
          <p className="text-justify" data-aos="fade-right">
            Want to blast your business off like a rocket? Tojo Global's got a
            secret weapon for you: an amazing custom Marketing, Management,
            Design, Development & Crypto listing plan which will turn heads and
            grow your business faster than ever.
          </p>


          <div className="space-y-4">

            <div
              className="flex items-center gap-4 p-3 rounded-lg"
              data-aos="fade-right"
            >
              <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] flex items-center justify-center">
                <FaPhoneAlt className="text-2xl text-white" />
              </div>
              <p>+92 123 456 7890</p>
            </div>


            <div
              className="flex items-center gap-4 p-3 rounded-lg"
              data-aos="fade-right"
            >
              <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] flex items-center justify-center">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <p>info@codesthinker.com</p>
            </div>


            <div
              className="flex items-start gap-4 p-3 rounded-lg"
              data-aos="fade-right"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] flex items-center justify-center">
                <IoLocationSharp className="text-2xl text-white" />
              </div>
              <p className="text-sm md:text-base leading-snug">
                Bartle House 9 Oxford Court, Manchester M23WQ
                <br /> United Kingdom (Regional Office)
              </p>
            </div>

            <div
              className="flex items-start gap-4 p-3 rounded-lg"
              data-aos="fade-right"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-[#070050] to-[#0E009F] flex items-center justify-center">
                <IoLocationSharp className="text-2xl text-white" />
              </div>
              <p className="text-sm md:text-base leading-snug">
                Hassan Manzil Basement Goheer Town
                <br /> Bahawalpur (Global Delivery Center)
              </p>
            </div>


            <div className="flex md:justify-start justify-center gap-4 pl-4 mt-10 flex-wrap text-white">
              {[
                { icon: <FaFacebookF />, from: "from-blue-500", to: "to-purple-500" },
                { icon: <FaTwitter />, from: "from-sky-400", to: "to-blue-600" },
                { icon: <FaInstagram />, from: "from-pink-500", to: "to-yellow-400" },
                { icon: <FaLinkedinIn />, from: "from-blue-600", to: "to-cyan-400" },
              ].map((social, idx) => (
                <div
                  key={idx}
                  className={`p-[2px] rounded-full bg-gradient-to-l ${social.from} ${social.to} hover:scale-105 transition-transform duration-300`}
                >
                  <div className="w-[40px] h-[40px] bg-[#0A043C] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                    {social.icon}
                  </div>
                </div>
              ))}
            </div>


          </div>

        </div>


        <div className="w-full md:w-1/2 py-6 px-2 md:px-6 md:mt-0 mt-4 bg-white shadow-lg rounded-lg" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <h2 className="md:text-3xl text-2xl font-bold text-center">Book a Free Consultation</h2>

            <div>
              <label className="font-bold">Full Name *</label>
              <input
                name="user_name"
                type="text"
                placeholder="Full Name"
                className="w-full border-[1.8px] rounded-md px-3 py-2 mt-1" />
            </div>

            <div>
              <label className="font-bold">Work Email *</label>
              <input
                name="user_email"
                type="email"
                placeholder="Working Email"
                className="w-full border-[1.8px] rounded-md px-3 py-2 mt-1" />
            </div>

            <div>
              <label className="font-bold">Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="Enter your subject"
                className="w-full border-[1.8px] rounded-md px-3 py-2 mt-1" />
            </div>

            <div>
              <label className="font-bold">Message</label>
              <textarea
                name="message"
                placeholder="Describe your message here"
                className="w-full border-[1.8px] rounded-md px-3 py-2 mt-1 h-[120px]">
              </textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-full 
                           bg-gradient-to-r from-[#070048] to-[#0E00A6] 
                           text-white hover:bg-gradient-to-l hover:from-[#070048] hover:to-[#0E00A6] 
                           transition-all duration-300">
                SUBMIT
                <IoMdSend />
              </button>
            </div>
          </form>
        </div>


      </div>


    </div>
  );
};

export default ContactForm;
