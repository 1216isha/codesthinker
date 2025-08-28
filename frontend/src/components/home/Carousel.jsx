import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import header1 from "../../assets/homeImages/header1.webp";
import { Link } from 'react-router-dom';

const Carousel = () => {
  const slides = [
    {
      image: header1,
      title: "Welcome to",
      subTitle: "Codes Thinker",
      desc: "We craft smart, user friendly digital solutions that help business Innovate and grow"
    },
    {
      image: header1,
      title: "Transform Ideas Into",
      subTitle: "Digital Reality",
      desc: "Our team blends creative design and clean to deliver impactful digital experiences."
    },
    {
      image: header1,
      title: "Your Vision,",
      subTitle: "Our Expertise",
      desc: "Partner with us to build scalable, modern websites that bring your vision to life."
    }

  ]

  return (
    <div className='w-full mx-auto mt-16'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          slides.map((data, index) => (
            <SwiperSlide key={index}>
              <div className='relative max-h-[650px]'>
                <img src={data.image} alt='header1' className='w-full h-[650px] object-cover' />

                <div className='absolute top-0 left-0 w-full h-full bg-[#0000008e] flex flex-col justify-center items-center text-white text-center px-4'>
                  <h1 className='text-6xl font-bold mt-14'>
                    {data.title} <span className='text-[#1964FD]'>{data.subTitle}</span>
                  </h1>
                  <p className='text-2xl mt-10 max-w-[600px]'>
                    {data.desc}
                  </p>
                  <div className='flex flex-row gap-3 mt-14'>
                    <Link to="http://localhost:5173/projects" className='bg-[#1964FD] px-5 p-3 rounded-full font-semibold transition-all duration-700 hover:scale-110 hover:bg-[#1449E8]'>
                      View Our Work
                    </Link>

                    <Link to="http://localhost:5173/contact" className='border-2 border-white px-5 p-3 rounded-full hover:bg-white hover:text-black font-semibold transition-all duration-700 hover:scale-115'>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel;
