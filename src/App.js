import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pages } from './constants/constants';
import Home from './pages/Home';
import Model3D from './pages/projects/Model3D';
import Game from './pages/projects/Game';
import AppProject from './pages/projects/AppProject';
import ScrollToTop from './components/ScrollTop';
import WebSite from './pages/projects/WebSite';
import Project from './pages/Project';
import GuestBook from './pages/blockchain/guestbook/GuestBook';
import About from './pages/About';
import Competences from './pages/Competences';
import Script from './pages/projects/Script';
import { useEffect, useState } from 'react';

const App = () => {
  const [isMobile, setIsMobile] =  useState(false);

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };


    //checkMobile();


    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          color: "#333",
        }}
      >
        <h1>
          Site web sur mobile en construction. <br />
          Veuillez visualiser le site sur un ordinateur.
        </h1>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={Pages.HOME} element={<Home />} />
        <Route path={Pages.MODEL3D} element={<Model3D />} />
        <Route path={Pages.GAME} element={<Game />} />
        <Route path={Pages.APP} element={<AppProject />} />
        <Route path={Pages.WEBSITE} element={<WebSite />} />
        <Route path={Pages.PROJECTS} element={<Project />} />
        <Route path={Pages.GUESTBOOK} element={<GuestBook />} />
        <Route path={Pages.ABOUT} element={<About />} />
        <Route path={Pages.COMPETENCES} element={<Competences />} />
        <Route path={Pages.SCRIPTS} element={<Script />} />
      </Routes>
    </Router>
  );
}

export default App;
