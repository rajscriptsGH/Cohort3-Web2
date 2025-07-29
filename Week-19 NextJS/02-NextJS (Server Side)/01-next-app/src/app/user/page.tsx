'use client'
import React from 'react'
import axios from 'axios'

//SSR => next js do server side rendering
export default async function User() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

    await new Promise(r => setTimeout(r, 3000))

    const data = response.data

    return <div>
        {data.title}
        <br />
        {data.id}
    </div>

}