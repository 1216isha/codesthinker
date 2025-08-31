import React from 'react';
import companylogo from "../../assets/homeImages/companylogo.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='px-14 bg-[#0A043C]  text-white'>
            <div className='w-full flex flex-col md:flex-row justify-between md:gap-0 gap-6 mx-auto py-10 font-sans '>

                <div className='w-full md:w-[30%] md:ml-10'>
                    <img src={companylogo} alt='companylogo' className='w-36 ' />
                    <p className='mt-5'>We offer a range of cutting-edge web development and software solutions tailored to meet client needs. Our experienced team delivers collaboratively and efficiently.</p>
                    <div className='flex gap-5 mt-5'>
                        <FaFacebookF className='bg-[#0F00AA] text-4xl p-2 rounded-full text-white' />
                        <FaTwitter className='bg-[#0F00AA] text-4xl p-2 rounded-full text-white' />
                        <FaInstagram className='bg-[#0F00AA] text-4xl p-2 rounded-full text-white' />
                        <TiSocialLinkedin className='bg-[#0F00AA] text-4xl p-2 rounded-full text-white' />
                    </div>

                </div>

                <div className='flex flex-col w-full md:w-[25%] md:px-12 text-justify mt-[10px]'>
                    <h3 className='text-xl font-bold hover:underline'>Services</h3>
                    <div className='mt-[15px] '>
                        <Link to="" >Business Intelligence</Link><br />
                        <Link to="" >Virtual Workstation</Link><br />
                        <Link to="" >Network Services</Link><br />
                        <Link to="" >Data Science</Link><br />
                        <Link to="" >IT Strategy</Link>
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-[25%] mt-[10px]'>
                    <h3 className='text-xl font-bold hover:underline'>Company</h3>
                    <div className='mt-[15px] '>
                        <Link to="" >About Us</Link><br />
                        <Link to="" >Latest Projects</Link><br />
                        <Link to="" >IT Solutions</Link><br />
                        <Link to="" >Team Members</Link><br />
                        <Link to="" >Contact Us</Link>
                    </div>
                </div>

                <div className='w-full md:w-[25%] mt-[10px]'>
                    <h3 className='text-xl font-bold hover:underline'>Contact Info</h3>

                    <div className=''>
                        <div className='flex flex-row w-[230px] mt-3 gap-3'>
                            <FaPhoneAlt className='bg-[#0F00AA] text-3xl rounded-full py-2 px-2 text-white' />
                            <p>+44 7470 103120</p>
                        </div>

                        <div className='flex flex-row w-[230px] mt-3 gap-3'>
                            <FaEnvelope className='bg-[#0F00AA] text-3xl rounded-full py-2 px-2 text-white' />
                            <p>info@codesthinker.com</p>
                        </div>

                        <div className='flex flex-row w-full md:w-[260px] mt-3 gap-3'>
                            <IoLocation className=' bg-[#0F00AA] text-3xl rounded-full  text-white py-2  px-2 my-4' />
                            <p className='w-full md:w-[70%]'>Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom (Regional Office)</p>
                        </div>

                        <div className='flex flex-row mt-3 gap-3'>
                            <IoLocation className='bg-[#0F00AA] text-3xl rounded-full text-white py-2 px-2 my-4' />
                            <p className='w-[80%]'>Hassan Manzil Basement Goheer Town Bahawalpur (Global Delivery Center)</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full md:max-w-[400px] ms-auto mt-3'>
                <input type="text" name="" id="" placeholder='Your Mail' className='bg-white text-gray-500 md:py-2 py-1 px-3 w-[70%] rounded-l-md focus:not-[]: h-[42px] outline-none border-none' />
                <button className='btn bg-[#0F00AA] hover:bg-[#3105aa] text-white text-center h-[43px] py-1 md:py-2 px-2 w-[30%] rounded-r-md'>Submit</button>
            </div>
            <br />
            <div className='flex flex-col text-center text-[10px] pb-10' >
                <hr className='w-[90%] md:ml-[40px]  text-gray-500' />
                <p className='mt-6  text-gray-300'>© 2024-All Rights Reserved-Code's Thinker</p>
            </div>
        </div>
    )
}

export default Footer