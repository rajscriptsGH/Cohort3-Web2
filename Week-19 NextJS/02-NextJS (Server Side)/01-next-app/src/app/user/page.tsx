import React from 'react'
import axios from 'axios'
import { log } from 'console'

//SSR => next js do server side rendering
export default async function User() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

    const data = response.data

    console.log("Hi");

    return <div>
        {data.title}
        <br />
        {data.id}
    </div>

}