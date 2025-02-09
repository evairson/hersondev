import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, link, reverse, stop}) => {

  return (
    <Link to={link} id='card' className={`${reverse ? "reverse" : ""} ${stop ? "stop" : ""}`}>
      <h2>{title}</h2>
      </Link>
  );
}

export default Card;