import './Project.css';

function Project({title, img, firstText, secondText, link}) {
    const style = {
        backgroundImage: `url(ressources/projects/${img}.png)`,
        backgroundSize: 'cover',
    }

  return (
    <a className="project" style={style} href={link} target="_blank">
        
      <h1>{title}</h1>
      <div className='overlay'>

      <p>{firstText}</p> <p>
      {secondText}
      </p>
      </div>
      
     
    </a>
  );
}



export default Project;