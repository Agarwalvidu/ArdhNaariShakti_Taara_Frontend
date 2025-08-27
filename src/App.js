import React, { useContext ,useState,useEffect } from "react";
import { Legal } from "./pages/legal/legal.jsx"
import { Footer } from "./components/footer/Footer";
import { GoogleTagManager } from "./components/tagmanager/tagmanager";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";
import { Context } from "./context/Context";
import { Jobs } from "./pages/jobs/jobs.jsx";
import { Blogpage } from "./pages/blogpage/blogpage.jsx";
import { Shelter } from "./pages/shelter/shelter.jsx";
import { Gallery } from "./pages/gallery/Gallery.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Privacy } from "./pages/privacy/Privacy.jsx";
import { Terms } from "./pages/terms/Terms.jsx";
import { Help } from "./pages/help/Help.jsx";
import { About } from "./pages/about/About.jsx";
import NotFound from "./pages/notfound/page.jsx"
import { GoToTopButton } from "./components/goToTopButton/goToTopButton.jsx";
import Feedback from "./pages/feedback/Feedback.jsx";
import CalmingCorner from "./pages/music/CalmingCorner.jsx"
import ForgotPassword from './pages/login/ForgotPassword';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/globalStyle.js";
import { lightTheme, darkTheme } from "./theme";
const App = () => {
  //after login
  const { user } = useContext(Context);
  const [theme, setTheme] = useState("light");

 // In your App.js toggleTheme function
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  
  // Add or remove the 'dark' class from body
  if (newTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  
  localStorage.setItem('theme', newTheme);
};

// And in your useEffect for initial theme setup
useEffect(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}, []);
  return (
    <ThemeProvider  theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <ScrollToTop />
         <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <GoogleTagManager />
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path="/post/:id" element={<DetailsPages />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blogs" element={<Blogpage />} />
          <Route path="/shelter" element={<Shelter />} />
          <Route path="/account" element={<Account />} />
          <Route path="/create" element={<Create />} />
          <Route path="/legal" element={<Legal/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/music" element={<CalmingCorner/>} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
        <GoToTopButton />
      </Router>
      <ToastContainer position="top-center" autoClose={2000} className="toast-container-lower-zindex" />
    </ThemeProvider>
  );
};
export default App;
