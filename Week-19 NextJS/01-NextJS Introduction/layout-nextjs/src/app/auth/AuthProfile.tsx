import Navbar from '@/components/Navbar'
import React from 'react'

const AuthProfile = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default AuthProfile