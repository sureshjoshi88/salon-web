import { BsScissors } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuChrome } from "react-icons/lu";
import { PiMaskHappyLight } from "react-icons/pi";
import { RiScissors2Line } from "react-icons/ri";
import { IoBrushOutline } from "react-icons/io5";
import { HiOutlineGift } from "react-icons/hi";

const HomeSection24 = () => {
  const services = [
    {
      icon: <FaRegCalendarCheck size={40} />,
      title: "Book Salon Appointment",
      desc: "Find nearby men's & women's salons and book instantly",
    },
    {
      icon: <LuChrome size={40} />,
      title: "Salon Services at Home",
      desc: "Get grooming services at home by professional beauticians",
    },
    {
      icon: <BsScissors size={40} />,
      title: "Haircut & Grooming",
      desc: "Professional haircut & styling for men, women & kids",
    },
    {
      icon: <PiMaskHappyLight size={40} />,
      title: "Facial & Skincare",
      desc: "Glow-boosting facials & skincare for everyone",
    },
    {
      icon: <RiScissors2Line size={40} />,
      title: "Waxing & Threading",
      desc: "Hygienic waxing & threading services for men & women",
    },
    {
      icon: <IoBrushOutline size={40} />,
      title: "Makeup & Styling",
      desc: "Party & bridal makeup by professionals",
    },
  ];

  return (
    <div className="w-full bg-[#FFF7F1] py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center text-[#5A2C1E]">
        Our Services
      </h2>
      <p className="text-center text-lg mt-2 text-[#6F4F44]">
        Salon & Home Services for Everyone.
      </p>
      <p className="text-center text-sm mt-1 text-[#6F4F44]">
        Men | Women | Kids — All Services Available
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-all"
          >
            <div className="text-[#F7A97E] flex justify-center mb-3">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#5A2C1E]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Free Offer Banner */}
      <div className="bg-gradient-to-r from-[#FFD9B7] to-[#FFBC86] p-5 rounded-2xl mt-10 flex items-center gap-4">
        <HiOutlineGift size={42} className="text-[#6F3F1F]" />
        <div>
          <h4 className="font-semibold text-xl text-[#5A2C1E]">
            Your 1st Salon or Home Service is FREE!
          </h4>
          <p className="text-[#6F4F44]">
            Experience Glowify with a free service this month.
          </p>
        </div>
      </div>

   
    </div>
  );
};

export default HomeSection24;
