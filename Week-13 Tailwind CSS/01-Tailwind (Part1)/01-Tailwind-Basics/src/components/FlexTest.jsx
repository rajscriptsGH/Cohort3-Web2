import React from 'react'

function FlexTest() {
    return (
        <div className='sm:flex justify-between'>
            <div className='bg-green-400 text-2xl rounded'>
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

export default FlexTest
