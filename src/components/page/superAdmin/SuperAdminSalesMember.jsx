import React, { useState } from 'react'

const SuperAdminSalesMember = () => {
  const [open,setOpen ] = useState(false)
    const tableData = [
        {
           Referral:"SP-2025-001",
           salesperson:"Rajesh Kumar",
           number:"9876567809",
           address:"Mumbai Maharashtra",
           salon :10,
           subscriptions:23,
           commission:"₹45,000"
        },
        {
           Referral:"SP-2025-001",
           salesperson:"Rajesh Kumar",
           number:"9876567809",
           address:"Mumbai Maharashtra",
           salon :10,
           subscriptions:23,
           commission:"₹45,000"
        },
        {
           Referral:"SP-2025-001",
           salesperson:"Rajesh Kumar",
           number:"9876567809",
           address:"Mumbai Maharashtra",
           salon :10,
           subscriptions:23,
           commission:"₹45,000"
        },
        {
           Referral:"SP-2025-001",
           salesperson:"Rajesh Kumar",
           number:"9876567809",
           address:"Mumbai Maharashtra",
           salon :10,
           subscriptions:23,
           commission:"₹45,000"
        },
        {
           Referral:"SP-2025-001",
           salesperson:"Rajesh Kumar",
           number:"9876567809",
           address:"Mumbai Maharashtra",
           salon :10,
           subscriptions:23,
           commission:"₹45,000"
        }
    ]
  return (
    <div className='shadow-md p-2'>
      <div>
       <div>
         <div className='flex items-center justify-between p-3'>
            <p className='font-medium text-2xl'>Sales Team Management</p>
            <button style={{background:"var(--primary-gradient)"}} onClick={()=>setOpen(true)} className='px-4 p-2 font-medium text-white  rounded-lg cursor-pointer'>+ Register New Sales Person</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr className='bg-gray-50 text-gray-700'>
                        <th className='md:p-4 p-2'>Referral ID</th>
                        <th className='md:p-4 p-2'>Sales Person</th>
                        <th className='md:p-4 p-2'>Phone/WhatsApp</th>
                        <th className='md:p-4 p-2'>Address</th>
                        <th className='md:p-4 p-2'>Salons</th>
                        <th className='md:p-4 p-2'>Subscriptions</th>
                        <th className='md:p-4 p-2'>Commission</th>
                        <th className='md:p-4 p-2'>Action</th>
                    </tr>
                    
                </thead>
                <tbody >
                      {tableData.map((item)=>
                    <tr className='border-b border-gray-400 '>
                        <td className='md:p-4 p-2 text-[#9333EA] font-medium'>{item.Referral}</td>
                        <td className='md:p-4 p-2 font-semibold'>{item.salesperson} </td>
                        <td className='md:p-4 p-2 text-gray-700'>{item.number}</td>
                        <td className='md:p-4 p-2 text-gray-700'>{item.address}</td>
                        <td className='md:p-4 p-2 '><span className='bg-[#F3E8FF] p-1 px-3 text-[#9333EA] rounded-2xl'>{item.salon}</span></td>
                        <td className='md:p-4 p-2'><span className='bg-[#DBEAFE] p-1 px-3 text-[#1D4ED8] rounded-2xl'>{item.subscriptions}</span></td>
                        <td className='md:p-4 p-2 text-[#16A34A]'>{item.commission}</td>
                        <td className='md:p-4 p-2 text-[#9333EA]'>View</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
       </div>
      </div>


       {open&& <div className="flex items-center justify-center p-4 absolute z-10 top-0 left-0 w-full">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-red-500 hover:text-red-600 font-bold text-xl cursor-pointer"
          onClick={()=>setOpen(false)}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold">Register New Sales Person</h2>
        <p className="text-sm text-gray-500">
          Enter Details to create a new sales person account
        </p>

        {/* Form Fields */}
                    <form action="">
        <div className="mt-5 space-y-4">

          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="text-sm font-medium">WhatsApp</label>
            <input
              className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none"
              placeholder="Enter WhatsApp number"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Address</label>
            <textarea
              className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none h-20 resize-none"
              placeholder="Enter address"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              className="w-full bg-[#F3F3F3] mt-1 p-3 rounded-lg outline-none"
              placeholder="Enter email"
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full mt-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500"
        >
          Register Sales Person
        </button>
        </form>
      </div>
    </div>}
    </div>
  )
}

export default SuperAdminSalesMember
