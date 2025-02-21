import './Header.css';
import { Pages } from '../../constants/constants';


const Header = ({activeIndex}) => {
  return (
    <header>
      <div className="container">

      <a href={Pages.HOME} className="logo">
        <img id="header_img" src="ressources/avatar_eva.png" alt="" />
      </a>

        <nav>
          <ul>
            <li className={activeIndex === Pages.HOME ? "active" : ""} id="home"><a href={Pages.HOME} >Home</a></li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li className={activeIndex === Pages.PROJECTS ? "active" : ""}><a href={Pages.PROJECTS}>My Projects</a></li>
            <li className={activeIndex === Pages.COMPETENCES ? "active" : ""}><a href={Pages.COMPETENCES}>Competences</a></li>
            <li className={activeIndex === Pages.ABOUT ? "active" : ""}><a href={Pages.ABOUT}>About Me</a></li>
            <li><a href="mailto:eva.herson.pro@gmail.com">Contact Me</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;