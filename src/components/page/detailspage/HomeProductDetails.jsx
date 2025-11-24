import React from 'react'
import { FaMapMarkerAlt, FaStar, FaRupeeSign, FaClock } from "react-icons/fa";
import { SlCursor } from "react-icons/sl";
import { Link, NavLink, Outlet, useParams} from 'react-router-dom';
import popularNearMe from '../../data';

const HomeProductDetails = () => {
    const {id}  = useParams();
   
    const data = popularNearMe.filter((item) => item.id === parseInt(id));
return (
  <div className='p-5'>
    <div className='bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 border border-gray-100'>

      {/* TOP PRODUCT DETAILS CARD */}
      {data?.map((item) => (
        <div key={item.id}>
          {/* Image */}
          <div className="h-100 object-cover rounded-xl overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              src={item.imgage}
              alt={item.name}
            />
           <Link to="/bookappoitment"> <button className='px-5 cursor-pointer font-medium p-2 rounded-lg bg-white absolute right-6 bottom-5'>
              Book Now
            </button></Link>
          </div>

          {/* Title + Rating */}
          <div className="mt-3">
            <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
            <h3 className=" text-sm text-gray-600 pt-1">Koramangala, Bangalore</h3>
            <div className='mt-2 flex gap-4'>
              <button className='px-3 p-2 rounded-lg bg bg-gray-600 text-white'>Home Service Available</button>
              <button className='px-3 p-2 rounded-lg bg bg-gray-600 text-white'>Open Now</button>
            </div>
            <div className="flex items-center gap-1 text-gray-600  text-sm pt-2">
              <FaStar /> {item.rating}
              <FaMapMarkerAlt className="mr-1" /> {item.distance}
              <SlCursor className="ml-1" /> Directions
            </div>
            <p className=" text-sm text-gray-600">
              Premium salon offering world-class hair and beauty services with expert stylists
            </p>
          </div>

          {/* Services List */}
          <div className="mt-3 text-sm text-gray-700 space-y-1">
            <div className="flex justify-between">
              <span>{item.category1.service}</span>
              <span className="flex items-center font-medium">
                <FaRupeeSign className="text-xs mr-1" /> {item.category1.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span>{item.category2.service}</span>
              <span className="flex items-center font-medium">
                <FaRupeeSign className="text-xs mr-1" /> {item.category2.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span>{item.category3.service}</span>
              <span className="flex items-center font-medium">
                <FaRupeeSign className="text-xs mr-1" /> {item.category3.price}
              </span>
            </div>
          </div>

          {/* Duration */}
          <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <FaClock /> {item.duration}
            </span>
          
          </div>
        </div>
      ))}

      {/* TABS */}

      <div className='flex justify-around p-3 font-medium text-lg'>
        <NavLink to="services"  className={({ isActive }) =>
            isActive
              ? " font-medium border-b p-2"
              : ""
          }>Services</NavLink>
        <NavLink to="gallery"  className={({ isActive }) =>
            isActive
              ? " font-medium border-b p-2"
              : ""
          }>Gallery</NavLink>
        <NavLink to="map"  className={({ isActive }) =>
            isActive
              ? " font-medium border-b p-2"
              : ""
          }>Map & Location</NavLink>
        <NavLink to="reviews"  className={({ isActive }) =>
            isActive
              ? " font-medium border-b p-2"
              : ""
          }>Reviews</NavLink>
        <NavLink to="policies"  className={({ isActive }) =>
            isActive
              ? " font-medium border-b p-2"
              : ""
          }>Policies</NavLink>
      </div>
      <div>
        <Outlet />
      </div>

    </div>

    {/* ROUTES SHOULD BE OUTSIDE THE CARD */}


  </div>
)

}

export default HomeProductDetails
