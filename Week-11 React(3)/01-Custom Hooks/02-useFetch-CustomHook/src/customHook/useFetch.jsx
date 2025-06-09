
import { useState, useEffect } from "react"

export function useFetchPostTitle() {
    const [data, setData] = useState({})

    async function getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const json = await response.json()
        setData(json)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return data.title
}
