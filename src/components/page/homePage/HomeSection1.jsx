import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper styles
import 'swiper/css'
const HomeSection1 = () => {

      const data   = [
        {
          image:'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-705255.jpg&fm=jpg',
          title:"Discover and Book the Best Salons Near You",
          text:"Find top-rated beauty services and book your appointment in minutes",
        },
        {
          image:'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-705255.jpg&fm=jpg',
          title:"Discover and Book the Best Salons Near You",
          text:"Find top-rated beauty services and book your appointment in minutes",
        },
        {
          image:'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-705255.jpg&fm=jpg',
          title:"Discover and Book the Best Salons Near You",
          text:"Find top-rated beauty services and book your appointment in minutes",
        }
      
      ]
  return (
    <div>
       <div>
        <div className="w-full relative ">
              
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={
                    {
                      nextEl: ".custom-next",
                      prevEl: ".custom-prev",
                    }
                  }
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  slidesPerGroup={1}
                  className="rounded-2xl"
                >
                  {data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className='pb-7'>
                        <img
                          src={item.image}
                          alt="salon_img"
                          className='w-full h-120 object-cover'
                        />
                       <div className='absolute z-20 lg:top-50 md:top-30 sm:top-22 top-5 text-white flex md:justify-between justify-center p-4 w-full'>
                          <button className=" hidden md:flex custom-prev cursor-pointer justify-center items-center h-15 w-15 text-2xl bg-[var(--primary)] text-white  rounded-full ">
                  <FaChevronLeft />
                </button>
                        <div className='text-center '>
                          <p className='font-bold md:text-3xl sm:text-2xl text-xl'>{item.title}</p>
                        <p className='font-semibold md:text-2xl md:pt-3 pt-2 sm:text-xl'>{item.text}</p>
                        <p className='md:pt-3 sm:pt-2 pt-1 md:text-xl'>{item.time}</p>
                        </div>
                             <button className="custom-next hidden md:flex cursor-pointer  bg-[var(--primary)] text-white justify-center items-center h-15 w-15 text-2xl rounded-full  ">
                  <FaChevronRight />
                </button>
                       </div>
                     
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
             
              </div>
      </div>
    </div>
  )
}

export default HomeSection1
