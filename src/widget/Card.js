import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, link, reverse }) {

  return (
    <Link to={link} id='card' className={`${reverse ? "reverse" : ""}`}>
      <h2>{title}</h2>
      </Link>
  );
}

export default Card;