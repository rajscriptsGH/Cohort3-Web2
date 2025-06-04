
import './App.css'

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

function MyComponent() {
  return <div style={{ backgroundColor: 'blue', padding: 12, borderRadius: 10 }}>
    Inline CSS
  </div>
}

export default App
