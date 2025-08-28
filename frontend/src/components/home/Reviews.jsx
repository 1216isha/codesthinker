

import React, { useState } from 'react'   // ⭐ NEW CODE (useState import)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaStar } from "react-icons/fa";


const Reviews = ({ bgColor }) => {
  // ⭐ NEW CODE START
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    alert(`Submitted!\nRating: ${rating}/5\nReview: ${review}`);
    setIsOpen(false);
    setRating(0);
    setReview("");
  };
  // ⭐ NEW CODE END

  console.log(bgColor);
  return (
    <div className={`w-full bg-[${bgColor}] m-auto mt-10 px-14 pb-12`}>
      <div className='flex gap-3 justify-around'>
        <div className='w-full md:w-[35%] h-[300px] mt-12'>
          <h1 className='text-3xl font-bold text-white text-center mt-30'  data-aos="fade-down">
            Our <span className='text-[#FFF200]'>Clients,</span> In <br /> Their Own Words
          </h1>
        </div>
        <div className='w-full md:w-[60%] shadow-2xl h-[300px] mt-12'  data-aos="zoom-in">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >

            {/* ⭐ ORIGINAL SWIPER CONTENT START */}
            <SwiperSlide>
              <div className='w-full md:w-[100%] h-[300px] py-2 px-2'>
                <div className='w-full md:w-[30%] h-[50px] flex gap-4'>
                  <h1 className='text-2xl text-white font-bold mt-1'>5.0</h1>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                </div>

                <div className='w-full md:w-[50%] h-[100px] flex gap-4'>
                  <div className='bg-purple-500 w-full md:w-[100px] h-[100px] rounded-full'>
                    <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" className='w-[100%] h-[100%] rounded-full object-cover' />
                  </div>

                  <div className='mt-7'>
                    <h3 className='text-xl font-black text-white'>BMX Adventure</h3>
                    <p className='text-gray-500'>Customer</p>
                  </div>
                </div>

                <div className='w-full md:w-[650px] h-[100px] mt-4 py-2 px-1'>
                  <p className='text-white'>
                    BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerfull imapct!
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-full md:w-[100%] h-[300px] py-2 px-2'>
                <div className='w-full md:w-[30%] h-[50px] flex gap-4'>
                  <h1 className='text-2xl text-white font-bold mt-1'>5.0</h1>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                  <div className='text-yellow-500 text-2xl mt-2'><FaStar /></div>
                </div>

                <div className='w-full md:w-[50%] h-[100px] flex gap-4'>
                  <div className='bg-purple-500 w-full md:w-[100px] h-[100px] rounded-full'>
                    <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" className='w-[100%] h-[100%] rounded-full object-cover' />
                  </div>

                  <div className='mt-7'>
                    <h3 className='text-xl font-black text-white'>Muhammad Waseem</h3>
                    <p className='text-gray-500'>Customer</p>
                  </div>
                </div>

                <div className='w-full md:w-[650px] h-[100px] mt-4 py-2 px-1 text-white'>
                  <p>
                    Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly professional team with great communication. Highly recomended for web solutions.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* ⭐ ORIGINAL SWIPER CONTENT END */}

          </ Swiper>
        </div>
      </div>

      {/* Button */}
      <div className='w-full md:w-[200px] h-[50px] bg-amber-500 flex justify-end rounded-2xl mt-12 ml-[1260px]'  data-aos="zoom-out">
        <button
          onClick={() => setIsOpen(true)}   // ⭐ NEW CODE
          className='w-full bg-[#FFF200] font-bold rounded-[8px] hover:bg-gradient-to-r from-[#f5d907] to-[#0A0343] hover:text-white'>
          Add Your Reviews
        </button>
      </div>

      {/* Reviews Section*/}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
          <div className="bg-white py-10 px-8  rounded-2xl shadow-lg w-[420px]">
            <h2 className="text-xl font-semibold mb-4 text-center">Submit Your Review</h2>

            {/* Rating Section */}
            <div className="flex flex-col mb-4">
              <p className="mb-2">Rating</p>
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <span
                      key={index}
                      className={`cursor-pointer text-2xl ${ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
                        }`}
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
              <p className="text-start text-sm text-gray-600">Rating: {rating} / 5</p>
            </div>

            {/* Review Input */}
            <p className='text-sm text-gray-600 font-bold mb-2'>Review</p>
            <textarea
              className="w-full p-2 border rounded-lg mb-4"
              rows="4"
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>

            {/* Buttons */}
            <div className="flex justify-between space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ⭐ NEW CODE END */}

    </div>
  )
}

export default Reviews
