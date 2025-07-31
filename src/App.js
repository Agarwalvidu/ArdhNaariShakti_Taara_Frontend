import React, { useContext } from "react"
import { Footer } from "./components/footer/Footer"
import { GoogleTagManager } from "./components/tagmanager/tagmanager"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import { Context } from "./context/Context"
import { ThemeProvider } from "./context/ThemeContext"
import { Jobs } from "./pages/jobs/jobs.jsx"
import { Blogpage } from "./pages/blogpage/blogpage.jsx"
import { Shelter } from "./pages/shelter/shelter.jsx"

const App = () => {
  //after login
  const { user } = useContext(Context)
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <GoogleTagManager/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Regsiter/>} />
          <Route path="/post/:id" element={<DetailsPages/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/blogs" element={<Blogpage/>} />
          <Route path="/shelter" element={<Shelter/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
export default App
