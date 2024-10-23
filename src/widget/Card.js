import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, link }) {

  return (
    <Link to={link} id='card'>
      <h2>{title}</h2>
      </Link>
  );
}

export default Card;