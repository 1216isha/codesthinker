import React from 'react'

const TeamMembers = () => {
  return (
    <div className='w-full md:w-[100%] py-20 px-16'>
      <div className='w-[50%] m-auto'>
        <h1 className='text-5xl font-bold text-center mt-8'>Meet Our <span className='text-[#0D0092]'>Team</span></h1>
        <p className='mt-3 text-center text-[19px]'>Our team of passionate and experienced professionals is dedicated to driving your success. From strategy to execution, we combine creativity, innovation, and insight to deliver exceptional results.</p>
      </div>

      <div className=' w-[1200px] m-auto mt-16'>
        <h1 className='text-3xl font-bold mt-8'>Global <span className='text-[#0D0092]'>Leadership</span></h1>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20 mt-6">


        <div className="relative h-[320px] rounded-[8px] overflow-hidden group">
          <img
            src="https://codesthinker.com/team/waseem.jpg" alt="CEO" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 hover:bg-transparent transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-black/70 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-500 ease-in-out 
                  flex flex-col justify-center text-center px-4 text-white">
            <h3 className="font-semibold text-lg">Muhammad Waseem</h3>
            <p className="text-sm">CEO</p>
          </div>
        </div>



        <div className="relative h-[320px] rounded-[8px] overflow-hidden group">
          <img src="https://codesthinker.com/team/b2.jpg" alt="HEAD" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 hover:bg-transparent transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-black/70 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-500 ease-in-out 
                  flex flex-col justify-center text-center px-4 text-white">
            <h3 className="font-semibold text-lg">Saim</h3>
            <p className="text-sm">Head of Business/UK</p>
          </div>
        </div>


        <div className="relative h-[320px] rounded-[8px] overflow-hidden group">
          <img src="https://codesthinker.com/team/g1.jpg" alt="Business Developer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 hover:bg-transparent transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-black/70 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-500 ease-in-out 
                  flex flex-col justify-center text-center px-4 text-white">
            <h3 className="font-semibold text-lg">Malaika Noor</h3>
            <p className="text-sm">Business Developer</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default TeamMembers