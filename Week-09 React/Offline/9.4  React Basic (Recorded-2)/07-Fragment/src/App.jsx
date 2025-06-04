
import './App.css'

function App() {

  return (
    <div>
      <h1>Fragment in React</h1>
      <p>Fragment in React</p>
      <MyComponent />
    </div>
  )
}

function MyComponent() {

  return (
    <>
      <div>Hii</div>
      <div>Hii there</div>
    </>
  )
}

export default App
