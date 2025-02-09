import { Pages } from "../../constants/constants";
import Header from "../../components/header/Header";
import Project from "../../components/project/Project";
import '../../components/project/Project.css';

const Game = () => {
  return (
    <div className="App projects">
        <Header activeIndex={Pages.PROJECTS}/> 
        <h1>Game</h1>

        <div className="container">

        <Project title = "Catan" img="catan" 
          firstText="This is a school project inspired by the board game Catan, developed in groups using Java."
          secondText="Click to view the Git repository. "
          link='https://github.com/evairson/catan'
        />

        <Project title = "Tower Defense Mario" img="tower-defense" 
          firstText="This is a school project of a Tower Defense, developed in groups of 2 using Java."
          secondText="Click to view the Git repository. "
          link='https://github.com/evairson/tower-defense'
        />

        <Project title = "Pacman" img="pacman" 
          firstText="This is a school project inspired by the game PacMan, developed in groups using Java."
          secondText="Click to view the Git repository. "
          link='https://github.com/evairson/pacman'
        />

        <Project title = "Unipoly" img="unipoly" 
          firstText="This is a school project inspired by the game Monopoly, developed in groups of 2 using fonctional programming in OCaml."
          secondText="The git repository will be available soon. "
          link='/'
        />

        </div>

    </div>
  )
}

export default Game;