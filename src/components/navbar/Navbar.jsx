import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TbXboxX } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background:'var(--primary-gradient)' }} className='sticky top-0 z-50'>

      {/* Main Navbar */}
      <nav className="shadow-md px-6 py-3 flex justify-between items-center   text-white">
        {/* Logo */}
        <div >
          <img className="w-15 rounded-full" src="/logo.jpeg" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden-mobile md:flex lg:space-x-8 md:space-x-5 font-medium text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer hover:text-[var(--primary)] transition ${isActive ? " font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `cursor-pointer hover:text-[var(--primary)] transition ${isActive ? "text-[#B58152] font-semibold" : ""
              }`
            }
          >
            Services
          </NavLink>
       
          
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer hover:text-[var(--primary)] transition ${isActive ? "text-[#B58152] font-semibold" : ""
              }`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer hover:text-[var(--primary)] transition ${isActive ? "text-[#B58152] font-semibold" : ""
              }`
            }
          >
            Contact us
          </NavLink>
          <div className='border-2 rounded-2xl px-2 p-0.5 flex gap-2 items-center '>
            <IoSearch />
            <input className='outline-0 w-full' type="text" name="" id="search" placeholder='Search salons, services, or areas...' />
          </div>
        </ul>

 <div className='border-2 rounded-2xl px-2 p-0.5 flex gap-2 sm:w-100 md:120 items-center desltop-hidden me-2'>
            <IoSearch />
            <input className='outline-0 w-full' type="text" name="" id="" placeholder='Search salons, services, or areas...' />
          </div>
        {/* Desktop button */}
        <div className="hidden-mobile md:flex">
          <button className=" font-medium text-2xl px-4 p-1.5  cursor-pointer">
            <FaShoppingCart />
          </button>
          <NavLink to="/profile">
            <button className=" px-5 py-2 rounded-xl font-medium cursor-pointer ">
              <FaUserCircle className="text-2xl" />
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="desltop-hidden text-3xl font-medium"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>

        {/* Mobile Menu (Sliding from Right) */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-[#F7F7F7] shadow-lg transform transition-transform duration-300 ease-in-out desltop-hidden z-50 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col items-center mt-2 space-y-5 text-[#1F3C5F] font-medium text-lg p-2">
            <p onClick={() => setOpen(false)} className="text-4xl flex justify-end w-full p-3 text-red-600"><TbXboxX /></p>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-2 hover:text-[#B58152] transition ${isActive ? "bg-[#B58152] text-white rounded-md" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/service"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-2 hover:text-[#B58152] transition ${isActive ? "bg-[#B58152] text-white rounded-md" : ""
                }`
              }
            >
              Services
            </NavLink>  
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-2 hover:text-[#B58152] transition ${isActive ? "bg-[#B58152] text-white rounded-md" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-2 hover:text-[#B58152] transition ${isActive ? "bg-[#B58152] text-white rounded-md" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
            <div className="flex justify-evenly">
              <button className=" font-medium text-2xl px-4 p-1.5  cursor-pointer">
                <FaShoppingCart />
              </button>
              <NavLink to="/profile">
                <button className=" px-5 py-2 rounded-xl font-medium cursor-pointer ">
                  <FaUserCircle className="text-2xl" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
