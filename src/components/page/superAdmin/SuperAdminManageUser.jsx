import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getdata } from '../../../redux/superAdmin/SuperAdmin';
import { FaUser, FaPhone, FaEnvelope, FaCheckCircle, FaTimesCircle } from "react-icons/fa";


const SuperAdminManageUser = () => {
const [PageNumber,setPageNumber] = useState(1)
  const dispatch = useDispatch()
    const handlegetData = () => {
      dispatch(getdata({ url: `${import.meta.env.VITE_API_URL}super-admin/get-all-users?page=${PageNumber}&limit=8`, key: "user", token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDA5ZGRhYjVkZWZkY2YzMjUyNzUxNiIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTc2NDI1NjIzNiwiZXhwIjoxNzY0ODYxMDM2fQ.YoRAhLqpPp4eY6kNzKdX1BWBdR7h2LGPyREjti61CRE' }))
    }
  
      const { data, loading, error } = useSelector((state) => state.salons)
        console.log(data)
    useEffect(()=>{
      handlegetData()
    },[])
  return (
    <div className='p-2 mt-2'>
 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {data.user?.users?.map((item) => (
    <div
      key={item._id}
      className="bg-white shadow-md p-4 rounded-xl  hover:shadow-lg duration-300 relative"
    >
      {/* Status */}
      {item.status === "active" ? <div className="absolute top-1 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">Active</div> : <div className="absolute top-1 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">Inactive</div>}

      {/* Name + Email */}
      <div className="mt-3">
        <p className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
          <FaUser className="text-gray-500" /> {item.name}
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-600 mt-1 break-all">
          <FaEnvelope className="text-gray-500" /> {item.email}
        </p>
      </div>

      {/* Phone + Role */}
      <div className="mt-3">
        <p className="flex items-center gap-2 text-gray-700 font-medium">
          <FaPhone className="text-gray-500" /> {item.phone}
        </p>
        <p className="mt-1 text-sm text-gray-500 capitalize">Role: {item.role}</p>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default SuperAdminManageUser
