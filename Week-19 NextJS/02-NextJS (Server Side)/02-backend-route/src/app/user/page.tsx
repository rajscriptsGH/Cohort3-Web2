
import React from 'react'
import axios from 'axios'

//SSR => next js do server side rendering
export default async function User() {
    const response = await axios.get("http://localhost:3000/api/v1/details")

    const data = response.data

    return <div>
        {data.title}
        <br />
        {data.id}
    </div>

}