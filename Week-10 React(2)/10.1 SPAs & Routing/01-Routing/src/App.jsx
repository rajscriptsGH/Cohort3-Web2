
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Link to={'/'}>Home</Link >
      |
      <Link to={"/project"}>Project </Link >
      |
      <Link to={"/book"}>Call</Link >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/book" element={<Call />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return <div>
    Home section
  </div>
}
function Project() {
  return <div>
    Project section
  </div>
}
function Call() {
  return <div>
    Book a Call section
  </div>
}

export default App
