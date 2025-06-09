
import { useState, useEffect } from "react"

export function useFetch(url, time) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    async function getPosts() {
        try {
            setLoading(true)
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        } catch (error) {
            console.log(error);
        } finally {

            setLoading(false)
        }
    }

    useEffect(() => {
        getPosts()
        if (time) {
            const fetchTime = setInterval(() => {
                getPosts()
            }, time)
            return () => clearInterval(fetchTime)
        }
    }, [url, time * 1000])

    return {
        data, loading
    }
}