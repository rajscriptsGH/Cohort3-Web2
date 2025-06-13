import React from 'react'
import monitorIcon from '../assets/monitor.png'
function Project1() {
    return (
        <div className='h-screen w-screen bg-blue-800 flex flex-col  text-center'>
            <div className='m-20 flex justify-center'>
                <img src={monitorIcon} className="h-10 w-10" alt="Monitor" />
                <h1 className='text-2xl font-light ml-2'>Webinar.gg</h1>
            </div>
            <div className='text-3xl mb-7 font-semibold'>
                <h1>Verify Your Age</h1>
            </div>
            <div>
                <p className='mb-3 text-blue-400'>Please confirm your birth year. This data will nor be stored</p>
                <input className='h-10 w-56 rounded-lg px-3' type="text" placeholder='Your Birth Year' />
            </div>
            <div>
                <button className='h-10 w-52 mt-3 bg-blue-600 rounded-lg'>Continue</button>
            </div>
        </div>
    )
}

export default Project1
