import React from 'react'

const SuperAdminPending = () => {
    return (
        <div className='bg-[#FFF7D6] p-2 rounded mt-4'>
            <div>
                <p>Pending Commission</p>
                <p>Awaiting approval</p>

                <div>
                    <div className='flex justify-between items-center mt-2'>
                        <p>Rahul Sharma
                            SP- 2025-001</p>
                        <p>₹ 45,000</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p>Priya Verma
                            SP -2025-002</p>
                        <p>₹ 82,500</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p>Amit Patel
                            SP- 2025-003</p>
                        <p>₹ 38,500</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperAdminPending
