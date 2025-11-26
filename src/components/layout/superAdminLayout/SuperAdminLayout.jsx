import React from 'react'
import SuperAdminNavbar from '../../page/superAdmin/SuperAdminNavbar'
import SuperAdminSideBar from '../../page/superAdmin/SuperAdminSideBar'
import SuperAdminHomeLayout from '../../page/superAdmin/SuperAdminHomeLayout'

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
           <SuperAdminHomeLayout/>
          </div>
        </div>
      </div>


     
    </div>
  )
}

export default SuperAdminLayout
