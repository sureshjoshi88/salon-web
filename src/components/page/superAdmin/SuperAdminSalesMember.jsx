import React from 'react'

const SuperAdminSalesMember = () => {
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
            <button className='px-4 p-2 font-medium text-white bg-[#8E59F6] rounded-lg cursor-pointer'>+ Register New Sales Person</button>
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
    </div>
  )
}

export default SuperAdminSalesMember
