import React, { useEffect, useState } from 'react'

const HomeSection4 = () => {
  const [data, setData] = useState('');


  useEffect(() => {
    fetch('https://saloonbackend-mumt.onrender.com/api/user/get-home-salons')
      .then(res => res.json())
      .then(data => {
        setData(data)
      }).catch(err => console.log(err))
  }, [])
  return (


//  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
//         {popularNearMe.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 border border-gray-100"
//           >
//             {/* Image */}
//             <div className="h-40 rounded-xl overflow-hidden">
//               <img
//                 className="w-full h-full object-cover"
//                 src={item.imgage}
//                 alt={item.name}
//               />
//             </div>

//             {/* Title + Rating */}
//             <div className="flex justify-between items-center mt-3">
//               <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
//               <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
//                 <FaStar /> {item.rating}
//               </div>
//             </div>

//             {/* Distance */}
//             <div className="flex items-center text-gray-500 text-sm mt-1">
//               <FaMapMarkerAlt className="mr-1" /> {item.distance} away
//             </div>

//             {/* Services */}
//             <div className="mt-3 text-sm text-gray-700 space-y-1">
//               <div className="flex justify-between">
//                 <span>{item.category1.service}</span>
//                 <span className="flex items-center font-medium">
//                   <FaRupeeSign className="text-xs mr-1" /> {item.category1.price}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span>{item.category2.service}</span>
//                 <span className="flex items-center font-medium">
//                   <FaRupeeSign className="text-xs mr-1" /> {item.category2.price}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span>{item.category3.service}</span>
//                 <span className="flex items-center font-medium">
//                   <FaRupeeSign className="text-xs mr-1" /> {item.category3.price}
//                 </span>
//               </div>
//             </div>

//             {/* Duration + See More */}
//             <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
//               <span className="flex items-center gap-1">
//                 <FaClock /> {item.duration}
//               </span>
//               <button className="text-indigo-600 font-medium hover:underline">
//                 See More
//               </button>
//             </div>
//           </div>
//         ))}

//       </div>


    <div className='p-3'>
      <div className='flex justify-between p-2'>
        <div><p>Salon at Home Services</p></div>
        <div><p>View All </p></div>
      </div>
      <p className='font-medium text-2xl m-3'>Men Salon Services</p>
      <div className='grid md:grid-cols-4 gap-3'>

        {
          data.data?.men.map((item) =>
            <div key={item._id} className='shadow-lg rounded p-2'>
              <img className='w-full' src="https://imgmediagumlet.lbb.in/media/2024/11/6735a5b5ce87bc4aebc0ccc9_1731569077158.jpg" alt="" />
              <p>{item.shopType}</p>
              <p>{item.shopName}</p>
              <p>{item.salonCategory}</p>
            </div>
          )
        }
      </div>

      <p className='font-medium text-2xl m-3'>Beauty Parlour Salon Services</p>

      <div className='grid md:grid-cols-4 gap-3'>
        {data.data?.beautyParlour.map((item) =>
          <div key={item._id} className='shadow-lg rounded p-2'>
            <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dcT7ViYSzGhHUNJYjreWLyt7Q2Yfbp1eGg&s" alt="" />
            <p>{item.shopType}</p>
            <p>{item.shopName}</p>
            <p>{item.salonCategory}</p>
            <p>{item.location.address}</p>
            <p>{item.location.city}</p>
            <p>{item.location.pincode}</p>
          </div>
        )}
      </div>
            <p className='font-medium text-2xl m-3'>Unisex Salon Services</p>

      <div className='grid md:grid-cols-4 gap-3'>
        {data.data?.unisex.map((item) =>
          <div key={item._id} className='shadow-lg rounded p-2'>
            <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajkARADaVCLJlzyl7nIIXOgEYX5PuVH-6uQ&s" alt="" />
            <p>{item.shopType}</p>
            <p>{item.shopName}</p>
            <p>{item.salonCategory}</p>
          </div>
        )
        }
      </div>

      <p className='font-medium text-2xl m-3'>Spa Salon Services</p>
      <div className='grid md:grid-cols-4 gap-3'>
        {data.data?.spa.map((item) =>
          <div key={item._id} className='shadow-lg rounded p-2'>
            <p>{item.shopType}</p>
            <p>{item.shopName}</p>
            <p>{item.salonCategory}</p>
          </div>
        )
        }
      </div>

      {/* <p className='font-medium text-2xl m-3'>Barber Shop Salon Services</p>
      <div className='grid md:grid-cols-4 gap-3'>
        {data.data?.barbershop?.map((item) =>
          <div key={item._id} className='shadow-lg rounded p-2'>
            <p>{item.shopType}</p>
            <p>{item.shopName}</p>
            <p>{item.salonCategory}</p>
          </div>
        )
        }
      </div> */}

      {/* <p className='font-medium text-2xl m-3'>Women Shop Salon Services</p>
      <div className='grid md:grid-cols-4 gap-3'>
        {data.data?.women.map((item) =>
          <div key={item._id} className='shadow-lg rounded p-2'>
            <p>{item.shopType}</p>
            <p>{item.shopName}</p>
            <p>{item.salonCategory}</p>
          </div>
        )
        }
      </div> */}
    </div>
  )
}

export default HomeSection4
