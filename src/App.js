import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pages } from './constants';
import Home from './Home';
import Model3D from './projects/Model3D';
import Game from './projects/Game';
import AppProject from './projects/AppProject';
import ScrollToTop from './widget/ScrollTop';
import WebSite from './projects/WebSite';
import Project from './Project';
import GuestBook from './blockchain/guestbook/GuestBook';
import About from './About';
import Competences from './Competences';

const App = () => {

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
      </Routes>
    </Router>
  );
}

export default App;
