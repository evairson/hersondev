import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Pages } from '../../constants/constants';

const links = [
  { to: Pages.PROJECTS, label: 'My Projects' },
  { to: Pages.COMPETENCES, label: 'Competences' },
  { to: Pages.ABOUT, label: 'About Me' },
];

const Header = ({activeIndex}) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={open ? 'open' : ''}>
      <div className="container">

        <nav>
          <ul>
            <li className={activeIndex === Pages.HOME ? "active" : ""} id="home">
              <Link to={Pages.HOME}><span className="logo_mark">EH</span> Home</Link>
            </li>
          </ul>
        </nav>

        <button className="menu_toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>

        <nav className='nav_right'>
          <ul>
            {links.map((link) => (
              <li key={link.to} className={activeIndex === link.to ? "active" : ""}>
                <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
              </li>
            ))}
            <li><a href="mailto:eva.herson.pro@gmail.com" className="header_cta">Contact Me</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
