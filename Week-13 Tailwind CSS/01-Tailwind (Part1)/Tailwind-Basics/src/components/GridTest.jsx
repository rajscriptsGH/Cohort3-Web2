import React from 'react'

function GridTest() {
    return (
        <div className='grid sm:grid-cols-3'>
            <div className='bg-green-400'>
                This is the first children
            </div>
            <div className='bg-red-400'>
                This is the second children
            </div>
            <div className='bg-blue-400'>
                This is the third children
            </div>
        </div>
    )
}

export default GridTest
