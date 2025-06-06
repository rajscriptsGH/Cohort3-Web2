
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css'

function App() {

  return (
    //act as a parent of Routes
    <BrowserRouter>
      {/* //Link is a alternative of a tag to prevent from loading pages in react */}
      <Link to={'/'}>Home</Link >
      ||
      <Link to={"/project"}>Project </Link >
      ||
      <Link to={"/book"}>Call</Link >
      <Routes>     //act as a parent of Route
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
  //usenavigate is used to navigate b/n pages on website
  const navigate = useNavigate()

  function backHome() {
    navigate('/')
  }
  return <div>
    Book a Call section
    <button onClick={backHome}>Back to Home</button>
  </div>
}

export default App
