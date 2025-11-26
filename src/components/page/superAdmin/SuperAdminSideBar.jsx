import React from 'react'
import { LuHouse, LuUser } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const SuperAdminSideBar = () => {
  return (
    <div>
       <aside className="hidden lg:block md:block lg:col-span-3 bg-white rounded-xl p-6 shadow-sm">
        <nav className="space-y-2">
          <NavLink to="/admin/profile" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }> Mange</NavLink>
          <NavLink to="/admin/service" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }>Services</NavLink>
          <NavLink to="/admin/specialists" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }> Specialists </NavLink>
          

        </nav>
      </aside>
    </div>
  )
}

export default SuperAdminSideBar
