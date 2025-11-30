import React from 'react'
  import { FaCut, FaGift } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { BsCalendar3, BsHouseDoor, BsScissors } from "react-icons/bs";
import { GiLipstick } from "react-icons/gi";
import { RiScissors2Fill } from "react-icons/ri";
const HomeSection22 = () => {
  const services = [
    {
      icon: <BsCalendar3 size={40} className="text-[#d38f72]" />,
      title: "Book Salon Appointment",
      desc: "Find nearby salons and book your slot instantly",
    },
    {
      icon: <BsHouseDoor size={40} className="text-[#d38f72]" />,
      title: "Beautician at Home",
      desc: "Get beauty services at your doorstep by top-rated professionals",
    },
    {
      icon: <BsScissors size={40} className="text-[#d38f72]" />,
      title: "Haircut & Grooming",
      desc: "Professional haircut, styling, and grooming for all ages",
    },
    {
      icon: <MdCleaningServices size={40} className="text-[#d38f72]" />,
      title: "Maxel & Cleanup",
      desc: "Premium facial, cleanup, and glow treatments at home",
    },
    {
      icon: <GiLipstick size={40} className="text-[#d38f72]" />,
      title: "Makeup & Styling",
      desc: "Choose your makeup artist for party, bridal, or events",
    },
    {
      icon: <RiScissors2Fill size={40} className="text-[#d38f72]" />,
      title: "Waxing & Threading",
      desc: "Expert waxing & threading with hygienic products",
    },
  ];
  return (
 
    <div className="py-16 bg-[#fff4ef]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-[#7b4b43]">Our Services</h2>
        <p className="text-[#af8d85] mt-3">
          Beauty & Grooming, Anytime. Anywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-center text-lg font-bold text-[#7b4b43]">
              {item.title}
            </h3>
            <p className="text-center text-sm text-[#ba9a93] mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Offer Card */}
      <div className="bg-[#f3a766] text-white mx-4 mt-10 p-5 rounded-2xl max-w-3xl mx-auto text-center shadow-sm">
        <div className="flex justify-center">
          <FaGift size={40} />
        </div>
        <h3 className="text-xl font-semibold mt-2">
          1st Home Service Absolutely FREE!
        </h3>
        <p className="mt-1">
          Try Glownify with a free service this month
        </p>
      </div>
    </div>


  )
}

export default HomeSection22
