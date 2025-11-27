import React from 'react'
import { LuHouse, LuUser } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const SuperAdminSideBar = () => {
  return (
    <div>
      <aside className="hidden lg:block md:block lg:col-span-3 bg-white rounded-xl p-3 shadow-sm w-50">
        <nav className="space-y-">
          <NavLink to="/superadmin" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }> Overview</NavLink>
          <NavLink to="/superadmin/managesalon" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }> Manage Salon</NavLink>
          <NavLink to="/superadmin/managecategory" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }>Manage Category</NavLink>
          <NavLink to="/superadmin/manageuser" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }> Manage User </NavLink>


        </nav>
      </aside>
    </div>
  )
}

export default SuperAdminSideBar
