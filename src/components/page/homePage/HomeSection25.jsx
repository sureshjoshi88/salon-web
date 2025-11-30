import React from 'react'

const HomeSection25 = () => {
  return (
   <div className="bg-gradient-to-r from-[#FFF7F1] to-[#FFEDE2] py-20 px-4 md:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Section */}
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-3xl font-bold text-[#5A2C1E] mb-6">Are You a Salon Owner?</h3>
      <p className="text-gray-600 mb-6">
        Join our platform and grow your salon business. Reach more customers effortlessly!
      </p>
      <button className="bg-[#FFBC86] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#ffad6a] transition-all">
        Partner With Register
      </button>
    </div>

    {/* Right Section */}
    <div className="text-center md:text-left bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-3xl font-bold text-[#5A2C1E] mb-4">Ready to Glow?</h3>
      <p className="text-gray-600 mb-6">
        Book your beauty service today and experience the glow you deserve!
      </p>
      <button className="bg-gradient-to-r from-[#FFBC86] to-[#FFA65C] text-white px-8 py-3 rounded-full shadow-lg hover:from-[#ffad6a] hover:to-[#ff9850] transition-all font-semibold">
        Download App
      </button>
    </div>

  </div>
</div>

  )
}

export default HomeSection25
