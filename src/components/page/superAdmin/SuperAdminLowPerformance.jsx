import React from 'react'

const SuperAdminLowPerformance = () => {
    return (
        <div className='p-2 bg-[#FFE7E7] mt-5'>
            <p>Low Performance Alert</p>
            <div className='bg-white p-2 rounded mt-2 shadow-md flex justify-between items-center'>
                <p>Amit Patel
                    9 salons</p>
                <button className='border border-[var(--primary)] text-[var(--primary)] rounded-xl px-1.5 p-1'>Alert</button>
            </div>
            <div className='bg-white p-2 rounded mt-2 shadow-md flex justify-between items-center'>
                <p>Amit Patel
                    9 salons</p>
                <button className='border border-[var(--primary)] text-[var(--primary)] rounded-xl px-1.5 p-1'>Alert</button>
            </div>
        </div>
    )
}

export default SuperAdminLowPerformance
