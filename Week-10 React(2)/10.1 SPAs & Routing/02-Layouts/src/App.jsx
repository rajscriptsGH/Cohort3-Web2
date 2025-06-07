
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import './App.css'

function App() {
// other way to include to routes
  // const routes = [
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/project",
  //     element: <Project />
  //   },
  // ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/book" element={<Call />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return <div style={{ height: '100vh' }}>
    <Header />

    <div style={{ height: '90vh', backgroundColor: "purple" }}>
      <Outlet />
    </div>

    <div style={{ backgroundColor: "green" }}>
      footer
    </div>
  </div>
}

function Header() {
  return <div>
    <Link to={"/"}>LandingPage</Link >
    ||
    <Link to={"/home"}>Home</Link >
    ||
    <Link to={"/project"}>Project </Link >
    ||
    <Link to={"/book"}>Call</Link >
  </div>
}


function LandingPage() {
  return <div>
    landing page
  </div>
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

function ErrorPage() {
  const navigate = useNavigate()

  function backHome() {
    navigate('/')
  }
  return <div>

    <p> Sorry, page not found</p>
    <button onClick={backHome}>Back to Home</button>
  </div>
}

export default App
