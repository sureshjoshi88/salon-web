import React from 'react'
import SuperAdminHeader from '../../page/superAdmin/SuperAdminHeader'
import SuperAdminSalesMember from '../../page/superAdmin/SuperAdminSalesMember'
import SuperAdminGraph from '../../page/superAdmin/SuperAdminGraph'
import SuperAdminPerformance from '../../page/superAdmin/SuperAdminPerformance'
import SuperAdminLowPerformance from '../../page/superAdmin/SuperAdminLowPerformance'
import SuperAdminPending from '../../page/superAdmin/SuperAdminPending'

const SuperAdminLayout = () => {
  return (
    <div>
      <SuperAdminHeader />
          <div className='flex gap-2'>
            <div>
                  <SuperAdminSalesMember />
            <SuperAdminGraph />
            </div>
            <div className='mt-3'>
                <SuperAdminPerformance/>
                <SuperAdminLowPerformance/>
                <SuperAdminPending/>
            </div>
           
          </div>
    </div>
  )
}

export default SuperAdminLayout
