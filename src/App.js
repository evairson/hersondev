import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pages } from './constants';
import Home from './Home';
import Model3D from './projects/Model3D';
import Game from './projects/Game';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={Pages.HOME} element={<Home />} />
        <Route path={Pages.MODEL3D} element={<Model3D />} />
        <Route path={Pages.GAME} element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
