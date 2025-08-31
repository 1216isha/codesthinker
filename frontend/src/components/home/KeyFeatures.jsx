

// import React from 'react'
// import { FaBitcoin, FaLock } from "react-icons/fa";
// import { MdBusinessCenter, MdRocketLaunch, MdIntegrationInstructions, MdLightbulb } from "react-icons/md";
// import { GoArrowSwitch } from "react-icons/go";


// const KeyFeatures = () => {
//   return (
//     <div className='w-full bg-[#F3F4F6] mt-6 md:mt-20 h-[500px]'>
//       <div className='w-full md:w-[60%] m-auto h-[100%] flex md:flex-row flex-col md:relative'>

//         <div className='md:absolute md:left-32 md:top-1/2 -translate-y-1/2' data-aos="fade-right">
//           <div className='w-[300px] h-[300px] rounded-full shadow-2xl flex md:flex-row flex-col items-center justify-center border'>
//             <h1 className='text-3xl font-bold text-center leading-snug'>
//               KEY <br /> FEATURES
//             </h1>
//           </div>
//         </div>


//         <div className='absolute left-[470px] top-[40px] flex flex-col gap-8'>

//           <div className='w-[400px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-0 left-[-100px] hover:text-white' data-aos="fade-left">
//             <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black '>
//               <FaBitcoin className='text-black text-lg hover:text-white' />
//             </div>
//             <p className='font-semibold px-10 '>Blockchain Expertise</p>
//           </div>

//           <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[70px] left-[-35px] hover:text-white' data-aos="fade-left">
//             <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
//               <MdBusinessCenter className='text-black text-2xl hover:text-white' />
//             </div>
//             <p className='font-semibold px-10'>Small Business Support</p>
//           </div>

//           <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[140px] left-[30px] hover:text-white' data-aos="fade-left">
//             <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
//               <FaLock className='text-black text-lg hover:text-white' />
//             </div>
//             <p className='font-semibold px-10'>Crypto Solutions</p>
//           </div>

//           <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[210px] left-[30px] hover:text-white' data-aos="fade-left">
//             <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
//               <MdRocketLaunch className='text-black text-2xl hover:text-white' />
//             </div>
//             <p className='font-semibold px-10'>Startup Business</p>
//           </div>

//           <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white border hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border-b-3 absolute top-[280px] left-[-35px] hover:text-white' data-aos="fade-left">
//             <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
//               <GoArrowSwitch className='text-black text-2xl hover:text-white' />
//             </div>
//             <p className='font-semibold px-10'>B2B Integration</p>
//           </div>

//           <div className='w-[350px] h-[60px] rounded-full shadow-lg flex items-center bg-white hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border border-b-3 absolute top-[350px] left-[-100px] hover:text-white' data-aos="fade-left">
//             <div className='w-[60px] h-[60px] rounded-full border-l-2 border-r-2 flex items-center justify-center mr-3 hover:bg-black'>
//               <MdLightbulb className='text-black text-2xl hover:text-white' />
//             </div>
//             <p className='font-semibold  px-10'>Fintech Innovation</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default KeyFeatures







import React from 'react'
import { FaBitcoin, FaLock } from "react-icons/fa";
import { MdBusinessCenter, MdRocketLaunch, MdIntegrationInstructions, MdLightbulb } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";

const KeyFeatures = () => {
  return (
    <div className='w-full bg-[#F3F4F6] mt-6 md:mt-20 h-auto md:h-[500px]'>
      <div className='w-full md:w-[60%] m-auto h-full flex md:flex-row flex-col md:relative'>

        {/* 🔹 Circle Title */}
        <div
          className='flex justify-center md:mb-0 md:absolute md:left-32 md:top-1/2 pb-8 md:-translate-y-1/2'
          data-aos="fade-right"
        >
          <div className='w-[250px] md:w-[300px] h-[250px] hover:bg-gradient-to-r hover:from-[#0E0097] hover:to-[#080059] hover:text-white md:h-[300px] rounded-full shadow-2xl md:mt-0 mt-10 flex items-center justify-center border'>
            <h1 className='text-2xl md:text-3xl font-bold text-center leading-snug'>
              KEY <br /> FEATURES
            </h1>
          </div>
        </div>

        {/* 🔹 Features Container */}
        <div className='flex flex-col gap-4 md:absolute md:left-[470px] md:top-[40px] md:px-0 px-6 md:py-0 py-4'>

          {/* Feature 1 */}
          <div className='feature-card md:w-[400px] md:h-[60px] w-full h-[50px] flex items-center shadow-lg rounded-full hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border hover:text-white transition-all px-4 
          md:absolute md:top-0 md:left-[-100px] border-b-3 bg-white border-l-2 border-r-2'>
            <FaBitcoin className='text-black md:text-lg ' />
            <p className='font-semibold md:px-10 pl-4'>Blockchain Expertise</p>
          </div>

          {/* Feature 2 */}
          <div className='feature-card md:w-[350px] md:h-[60px] w-full h-[50px] flex items-center bg-white shadow-lg rounded-full hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border hover:text-white transition-all px-4 
          md:absolute md:top-[70px] md:left-[-35px] border-b-3 border-l-2 border-r-2'>
            <MdBusinessCenter className='text-black md:text-2xl' />
            <p className='font-semibold md:px-10 pl-4'>Small Business Support</p>
          </div>

          {/* Feature 3 */}
          <div className='feature-card md:w-[350px] md:h-[60px] w-full h-[50px] flex items-center bg-white shadow-lg rounded-full hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border hover:text-white transition-all px-4 
          md:absolute md:top-[140px] md:left-[30px] border-b-3 border-l-2 border-r-2'>
            <FaLock className='text-black md:text-lg' />
            <p className='font-semibold md:px-10 pl-4'>Crypto Solutions</p>
          </div>

          {/* Feature 4 */}
          <div className='feature-card md:w-[350px] md:h-[60px] w-full h-[50px] flex items-center bg-white shadow-lg rounded-full hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border hover:text-white transition-all px-4 
          md:absolute md:top-[210px] md:left-[30px] border-b-3 border-l-2 border-r-2'>
            <MdRocketLaunch className='text-black md:text-2xl' />
            <p className='font-semibold md:px-10 pl-4'>Startup Business</p>
          </div>

          {/* Feature 5 */}
          <div className='feature-card md:w-[350px] md:h-[60px] w-full h-[50px] flex items-center bg-white shadow-lg rounded-full hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border hover:text-white transition-all px-4 
          md:absolute md:top-[280px] md:left-[-35px] border-b-3 border-l-2 border-r-2'>
            <GoArrowSwitch className='text-black md:text-2xl' />
            <p className='font-semibold md:px-10 pl-4'>B2B Integration</p>
          </div>

          {/* Feature 6 */}
          <div className='feature-card md:w-[350px] md:h-[60px] w-full h-[50px] flex items-center bg-white shadow-lg rounded-full hover:bg-gradient-to-l hover:from-[#060048] hover:to-[#0D0096] border hover:text-white transition-all px-4 
          md:absolute md:top-[350px] md:left-[-100px] border-b-3 border-l-2 border-r-2'>
            <MdLightbulb className='text-black md:text-2xl' />
            <p className='font-semibold md:px-10 pl-4'>Fintech Innovation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures


