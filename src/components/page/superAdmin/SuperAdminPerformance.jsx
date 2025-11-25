import React from 'react'

const SuperAdminPerformance = () => {
  return (
    <div>
       <div className='bg-green-100 p-2'>
            <div>
                <p>Top Performer</p>
                <div className='flex gap-1 items-center'>
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                    <div>
                        <p>Priya Verma</p>
                        <p>SP -2025-002</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center mt-2'>
                        <p>Salons Registered</p>
                        <p>18</p>
                        </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p>Subscriptions Sold</p>
                        <p>15</p>
                        </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p>Commission Earned</p>
                        <p>₹ 82,500</p>
                        </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default SuperAdminPerformance
