import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaStar } from "react-icons/fa";

const Reviews = ({ bgColor }) => {
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

  return (
    <div className={`w-full bg-[${bgColor}] m-auto mt-10 px-4 md:px-14 pb-12`}>
      {/* Container flex for desktop, stacked for mobile */}
      <div className='flex flex-col md:flex-row gap-6 justify-around items-center md:items-start'>

        {/* Left Text Section */}
        <div className='w-full md:w-[35%] h-auto md:h-[300px] md:mt-12 flex items-center justify-center rounded-lg p-4'>
          <h1
            className='text-3xl md:text-4xl font-bold text-white text-center leading-snug'
            data-aos="fade-down"
          >
            Our <span className='text-[#FFF200]'>Clients,</span> <br /> In Their Own Words
          </h1>
        </div>

        {/* Swiper Section */}
        <div
          className='w-full md:w-[60%] bg-gradient-to-r from-[#0d0377] to-[#0a044d] shadow-2xl p-4 h-auto md:h-[300px] md:mt-12 rounded-lg'
          data-aos="zoom-in"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className='w-full h-auto py-2 px-2 flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <h1 className='text-2xl text-white font-bold'>5.0</h1>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className='text-yellow-500 text-2xl' />
                  ))}
                </div>

                <div className='flex items-center gap-4'>
                  <div className='bg-purple-500 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden'>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      alt=""
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='text-lg md:text-xl font-black text-white'>BMX Adventure</h3>
                    <p className='text-gray-300'>Customer</p>
                  </div>
                </div>

                <p className='text-white'>
                  BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerful impact!
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className='w-full h-auto py-2 px-2 flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <h1 className='text-2xl text-white font-bold'>5.0</h1>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className='text-yellow-500 text-2xl' />
                  ))}
                </div>

                <div className='flex items-center gap-4'>
                  <div className='bg-purple-500 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden'>
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      alt=""
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='text-lg md:text-xl font-black text-white'>Muhammad Waseem</h3>
                    <p className='text-gray-300'>Customer</p>
                  </div>
                </div>

                <p className='text-white'>
                  Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly recommended for web solutions.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Add Review Button - Centered for mobile */}
      <div
        className='w-[200px] md:w-[200px] h-[50px] bg-gradient-to-r from-[#FFF200] to-[#f5d907] hover:bg-gradient-to-r hover:from-[#f5d907] hover:to-[#0A0343] hover:text-white flex justify-center items-center rounded-2xl mt-8 mx-auto'
        data-aos="zoom-out">
        <button
          onClick={() => setIsOpen(true)}
          className='w-full  font-bold rounded-[8px]'>
          Add Your Reviews
        </button>
      </div>

      {/* Review Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4">
          <div className="bg-white py-10 px-6 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Submit Your Review</h2>

            <div className="flex flex-col mb-4">
              <p className="mb-2">Rating</p>
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <span
                      key={index}
                      className={`cursor-pointer text-2xl ${ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
              <p className="text-sm text-gray-600">Rating: {rating} / 5</p>
            </div>

            <p className='text-sm text-gray-600 font-bold mb-2'>Review</p>
            <textarea
              className="w-full p-2 border rounded-lg mb-4"
              rows="4"
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>

            <div className="flex justify-between">
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
    </div>
  );
};

export default Reviews;
