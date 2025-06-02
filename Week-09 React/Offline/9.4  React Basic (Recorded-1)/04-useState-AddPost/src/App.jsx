
import { useState } from 'react'
import './App.css'
import { PostComponent } from './PostComponent.jsx'

function App() {
  const [posts, setPosts] = useState([])
  const [count, setCount] = useState(0)

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
      description: "this is the logo of world bank",
    }])
    setCount(count + 1)
  }


  function increaseCount() {


  }
  return (
    <div>
      <div style={{ height: 30, width: 120, backgroundColor: "red", display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <button style={{ height: 20, widows: 120, backgroundColor: "white", color: '#111', border: "none", padding: 5, borderRadius: 6, textAlign: 'center', cursor: 'pointer' }} onClick={addPost}>Add Post</button>
      </div>
      <div style={{ height: 30, width: 120, backgroundColor: "red", display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <button style={{ height: 20, widows: 120, backgroundColor: "white", color: '#111', border: "none", padding: 5, borderRadius: 6, textAlign: 'center', cursor: 'pointer' }} onClick={increaseCount}>Notifics</button>

      </div>
      <div style={{ display: 'flex', position: 'relative' }}>
        <img src="https://www.shutterstock.com/image-vector/bell-icon-trendy-flat-style-260nw-407306239.jpg" height={40} width={40} alt="" />
        <h4 style={{ paddingLeft: 10, backgroundColor: 'red', height: 20, width: 20, textAlign: 'center' }}>{count}</h4>
      </div>
      <div>
        {PostComponents}
      </div>
    </div>
  )
}

export default App
