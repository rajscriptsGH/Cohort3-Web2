import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='bg-blue-600 h-screen sm:w-80 w-4 transition-all duration-2000'>
                Sidebar
            </div>
            <div className='bg-red-500 h-screen flex-1'>
                Content
            </div>
        </div>
    )
}

export default Sidebar
