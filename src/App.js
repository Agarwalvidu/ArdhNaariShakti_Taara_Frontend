import React, { useContext } from "react";
import { Legal } from "./pages/legal/legal.jsx"
import { Footer } from "./components/footer/Footer";
import { GoogleTagManager } from "./components/tagmanager/tagmanager";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import Account from "./pages/account/Account"; // ✅ make sure this imports the updated Account
import Settings from "./pages/account/Settings";
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

const App = () => {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <Header />
        <GoogleTagManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path="/post/:id" element={<DetailsPages />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blogs" element={<Blogpage />} />
          <Route path="/shelter" element={<Shelter />} />
          <Route path="/account" element={<Account />} /> {/* ✅ Updated Account route */}
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
        </Routes>
        <Footer />
        <GoToTopButton />
      </Router>
    </>
  );
};

export default App;
