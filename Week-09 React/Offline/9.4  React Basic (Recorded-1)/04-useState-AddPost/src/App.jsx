
import { useState } from 'react'
import './App.css'
import { PostComponent } from './PostComponent.jsx'

function App() {
  const [posts, setPosts] = useState([])

  const PostComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "Razz",
      subtitle: "23932 followers",
      time: '13m ago',
      image: "https://img-corp.com/images/logo@2x.png",
      description: "this is the logo of world bank"
    }])
  }

  return (
    <div>
      <div style={{ height: 30, width: 120, backgroundColor: "red", display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <button style={{ height: 20, widows: 120, backgroundColor: "white", color: '#111', border: "none", padding: 5, borderRadius: 6, textAlign: 'center', cursor: 'pointer' }} onClick={addPost}>Add Post</button>
      </div>
      <div>
        {PostComponents}
      </div>
    </div>
  )
}

export default App
