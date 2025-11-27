import React, { useEffect, useState } from 'react'
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux"
import { getdata } from '../../../redux/userSlice/SuperAdmin';
import CardLoader from '../homePage/CardLoader';

const SuperAdminManageCategory = () => {

  const [categories, setCategories] = useState('');
  const dispatch = useDispatch()
  const {data,loading,error} = useSelector((state)=>state.salons)
  console.log(error)

  const handlegetData = () => {
    dispatch(getdata({ url: 'https://saloonbackend-mumt.onrender.com/api/user/get-all-categories', key: "saloncategory", token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDA5ZGRhYjVkZWZkY2YzMjUyNzUxNiIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTc2NDI1NjIzNiwiZXhwIjoxNzY0ODYxMDM2fQ.YoRAhLqpPp4eY6kNzKdX1BWBdR7h2LGPyREjti61CRE' }))
  }

  useEffect(() => {
    handlegetData()
  }, [dispatch])
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
        {loading&&Array.from({ length: data.saloncategory?.categories.length}).map((_,item)=>
        <CardLoader/>)}
        {error&&<p>{error}</p>}
        {data.saloncategory?.categories?.map((service) => (
          <div
            key={service._id}
            className="flex items-center justify-between p-4 bg-white shadow-lg rounded-xl 
                 hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <p className="text-lg font-semibold text-gray-700">
                {service.name}
              </p>
              <div className="flex gap-3 text-gray-600 mt-3">
                <FiEdit2 className="cursor-pointer" size={18} />
                <FiTrash2 className="cursor-pointer" size={18} />
              </div>      </div>

            <img
              className="w-14 h-14 rounded-full object-cover border"
              src={service.icon}
              alt={service.name}
            />
          </div>
        ))}
      </div>


      <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit Category</h2>

        <form className="space-y-5">

          {/* Category Name */}
          <div>
            <label className="block mb-1 font-medium">Category Name</label>
            <input
              type="text"
              placeholder="Enter category name"
              className="w-full bg-[var(--secondary)] p-2 outline-0 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Icon Upload */}
          <div>
            <label className="block mb-1 font-medium">Category Icon</label>
            <input
              type="text"
              placeholder='Category Icon'
              className="w-full bg-[var(--secondary)] outline-0 p-2 rounded-lg cursor-pointer"
              required
            />
          </div>
          <button
            type="button"
            style={{ background: 'var(--primary-gradient)' }}
            className="w-full font-medium text-lg  text-white py-2 rounded-lg cursor-pointer transition "
          >
            Save
          </button>

        </form>
      </div>

      <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Category</h2>

        <form className="space-y-5">

          {/* Category Name */}
          <div>
            <label className="block mb-1 font-medium">Category Name</label>
            <input
              type="text"
              placeholder="Enter category name"
              className="w-full bg-[var(--secondary)] p-2 outline-0 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Icon Upload */}
          <div>
            <label className="block mb-1 font-medium">Category Icon</label>
            <input
              type="text"
              placeholder='Category Icon'
              className="w-full bg-[var(--secondary)] outline-0 p-2 rounded-lg cursor-pointer"
              required
            />
          </div>
          <button
            type="button"
            style={{ background: 'var(--primary-gradient)' }}
            className="w-full font-medium text-lg  text-white py-2 rounded-lg cursor-pointer transition "
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default SuperAdminManageCategory
