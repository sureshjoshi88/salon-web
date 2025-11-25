import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSalesMember from './AdminSalesMember'
import AdminGraph from './AdminGraph'

const SuperAdminLayout = () => {
    return (
        <div>
            <AdminHeader />
            <AdminSalesMember />
            <AdminGraph />
        </div>
    )
}

export default SuperAdminLayout
