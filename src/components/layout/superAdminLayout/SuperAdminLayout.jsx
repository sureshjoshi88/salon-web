import React from 'react'
import SuperAdminNavbar from '../../page/superAdmin/SuperAdminNavbar'
import SuperAdminSideBar from '../../page/superAdmin/SuperAdminSideBar'
import SuperAdminHomeLayout from '../../page/superAdmin/superadminhome/SuperAdminHomeLayout'
import { Outlet } from 'react-router-dom'

const SuperAdminLayout = () => {
  return (
    <div>
      <div>
      <SuperAdminNavbar />
        <div className='flex gap-3 '>
          <div>
            <SuperAdminSideBar/>
          </div>
          <div className='w-full'>
           {/* <SuperAdminHomeLayout/> */}
           <Outlet/>
          </div>
        </div>
      </div>


     
    </div>
  )
}

export default SuperAdminLayout
