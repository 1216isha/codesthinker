import React from 'react'

const AboutHeader = () => {
  return (
    <div className='w-full md:w-[100%] py-16 px-22 bg-[#E9F6FF] mt-16 flex gap-12'>
      <div className='w-full md:w-[1100px] px-20 py-10'>
        <h1 className='text-4xl font-bold mt-10'>Building <span className='text-[#0F00AA]'>Future-Ready <br /> Software</span></h1>

        <p className='mt-5 text-[17px] text-justify'>We are a team of passionate developers, designers, and thinkers building scalable solutions for tomorrow. At [Codes Thinker], we don't just build software — we craft scalable, intelligent solutions that drive real-world impact. Our team of developers, designers, and strategists work together to deliver innovative digital products tailored for tomorrow's challenges. Rooted in collaboration, quality, and forward thinking, we're committed to helping businesses grow through technology.</p>

      </div>

      <div className='w-full md:w-[1100px] h-[500px] rounded-[8px] bg-amber-200'>
        <img src="https://codesthinker.com/about/about2.jpg" alt="" className='rounded-[8px] w-[100%] h-[100%] object-cover' />
      </div>
      
    </div>
  )
}

export default AboutHeader