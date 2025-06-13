import React, { useRef } from 'react'

function OTP() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    return (
        <div className='h-screen w-screen bg-blue-800 flex justify-center align-middle'>
            <SubOtp reference={ref1} onDone={() => {
                ref2.current.focus()
            }} />
            <SubOtp reference={ref2} onDone={() => {
                ref3.current.focus()
            }} />
            <SubOtp reference={ref3} onDone={() => {
                ref4.current.focus()
            }} />
            <SubOtp reference={ref4} onDone={() => {
                ref5.current.focus()
            }} />
            <SubOtp reference={ref5} onDone={() => {
                ref6.current.focus()
            }} />
            <SubOtp reference={ref6} onDone={() => {

            }} />
            <br />
            <button>Sign up</button>
            {/* <Button>Sign up</Button> */}
        </div>
    )
}

function SubOtp({ reference, onDone }) {
    return <div className='mt-[100px]'>
        <input ref={reference} onChange={() => {
            onDone()
        }} className='h-[50px] w-[40px] rounded-lg bg-blue-600 outline-none text-center text-white m-1' type="text" />
    </div>
}

export default OTP
