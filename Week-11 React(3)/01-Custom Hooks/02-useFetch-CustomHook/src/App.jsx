
//1. way to fetch data (usefetch)
// import { useState, useEffect } from "react"

// export function useFetchPostTitle() {
//   const [data, setData] = useState({})

//   async function getPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const json = await response.json()
//     setData(json)
//   }

//   useEffect(() => {
//     getPosts()
//   }, [])

//   return {
//     data: data,
//     getPosts: getPosts
//   }
// }

// function App() {
//   const { data } = useFetchPostTitle()
//   return (
//     <div>
//       {data.title}
//     </div>
//   )
// }

//2nd way

// import { useFetchPostTitle } from './customHook/useFetch.jsx'
// function App() {
//   const postTitle = useFetchPostTitle()

//   return (
//     <div>
//       {postTitle}
//     </div>
//   )
// }


///3 way

import { useFetch } from './customHook/useFetch.jsx'
function App() {
  const postTitle = useFetch('https://jsonplaceholder.typicode.com/posts/1')

  return (
    <div>
      {JSON.stringify(postTitle)}
    </div>
  )
}



export default App
