import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

const SuperAdminNavbar = () => {
  return (
    <div style={{background:'var(--primary-gradient)'}} className='text-white font-medium'>
       <div className='shadow-md p-3'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4 '>
          <p><TiHome className='text-2xl' /></p>
          <p>Super Admin Dashboard</p>
        </div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1 rounded-2xl p-1 border'>
                <p><IoSearchOutline /></p>
          <input className='outline-0' type="search" placeholder='Search...' name="" id="" />

            </div>
          <p><IoMdNotifications className='text-2xl cursor-pointer' /></p>
          <img className='w-8 rounded-full' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
          <p>Admin</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SuperAdminNavbar
