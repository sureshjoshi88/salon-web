import React from 'react'

const HomeSection22 = () => {
  return (
    <div>
  <div className="grid md:grid-cols-2 gap-10 items-center px-4 py-10">

  {/* Left Section */}
  <div className="text-center">
   <div className='space-y-4 '>
     <p className="text-3xl font-bold text-gray-800 leading-snug">
      Earn With Us
    </p>

    <p className="text-3xl font-bold text-gray-800 leading-snug">
      Grow Your Business
    </p>

    <p className="text-gray-600 text-base text-lg">
      Register your beauty salon, connect with customers, and boost bookings instantly.
    </p>

    {/* Buttons */}
    <div className="flex gap-4 mt-5 justify-center">
      <button
      style={{background:'var(--primary-gradient)'}}
        className="px-5 py-2 rounded-lg text-white font-medium 
        shadow-md hover:shadow-lg transition
        cursor-pointer 
        "
      >
        Register Your Shop
      </button>

      <button
        className="px-5 py-2 rounded-lg font-medium border 
        border-[var(--primary)] text-[var(--primary)] 
        hover:bg-[var(--primary)] hover:text-white transition cursor-pointer"
      >
        Book Service
      </button>
    </div>
   </div>
  </div>

  {/* Right Section */}
  <div className="flex justify-center">
    <img
      className="rounded-2xl shadow-xl w-full object-cover"
      src="https://media.istockphoto.com/id/1497806504/photo/hair-styling-in-beauty-salon-woman-does-her-hair-in-modern-beauty-salon-woman-stylist-dries.jpg?s=612x612&w=0&k=20&c=3dO_HWS8WvSGNbGmxTsqK70vZMGqM2REnbVJG09YnmI="
      alt="Salon"
    />
  </div>

</div>

    </div>
  )
}

export default HomeSection22
