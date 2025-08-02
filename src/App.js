import React, { useState, useEffect } from "react";
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
import { Jobs } from "./pages/jobs/jobs.jsx";
import { Blogpage } from "./pages/blogpage/blogpage.jsx";
import { Shelter } from "./pages/shelter/shelter.jsx";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <Router>
      {/* Pass theme and toggleTheme to Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

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
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
