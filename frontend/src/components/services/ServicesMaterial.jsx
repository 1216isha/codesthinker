import React from 'react'
import services from './ServicesData'
import { useNavigate } from 'react-router-dom'


const ServicesMaterial = () => {
  const navigate = useNavigate();
  const handleDetail = (data) => {
    navigate(`/services-detail/${data.id}`)
  }
  return (
    <div className=' mt-10'>
      <h1 className='text-4xl font-bold text-center' data-aos="fade-down">Latest Services</h1>

      <div className='w-full md:py-20 py-6 md:px-20 px-8 flex gap-12 flex-wrap'>

        {
          services.map((data, index) => (
            <div className='w-full md:w-[430px] md:h-[520px] rounded-[10px] border-t-blue-800 border-t-4 border-b-6 border-b-blue-800 mb-8 transition duration-300 hover:-translate-y-3' md:data-aos="fade-up">
              <div className='w-full h-[50%]'>
                <img src={data.image} alt="" className='w-[100%] h-[100%]' />
              </div>
              <div className='w-full h-[35%] py-5 px-4'>
                <h2 className='font-bold text-2xl'>{data.title}</h2>
                <p className='md:text-[18px] font-sans mt-2 text-gray-600'>{data.desc_short}</p>
              </div>

              <div className='w-full h-fit flex justify-center items-center'>
                <button onClick={() => handleDetail(data)} className='w-[150px] md:w-[150px] h-[50px] py-2 px-2 rounded-full text-white font-bold text-xl bg-gradient-to-r from-[#04002A] to-[#0E00A6]'>Learn More</button>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default ServicesMaterial