import { useState } from 'react'

import { useFetch } from './hooks/useFetch'
function App() {
    const [currentPost, setCurrentPost] = useState(1)

    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/' + currentPost)

    if (loading) {
        return <div>
            Loading........
        </div>
    }


    return (
        <div>
            <button onClick={() => setCurrentPost(1)}>Link1</button>
            <button onClick={() => setCurrentPost(2)}>Link2</button>
            <button onClick={() => setCurrentPost(3)}>Link3</button>
            <br /> <br />
            {JSON.stringify(data)}
        </div>
    )
}



export default App