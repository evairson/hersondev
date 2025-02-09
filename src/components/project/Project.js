import './Project.css';

const Project = ({title, img, firstText, secondText, link, phone}) => { 
    const style = {
        backgroundImage: `url(ressources/projects/${img}.png)`,
        backgroundSize: 'cover',
        
    }

  return (
    <a className={`project ${phone ? 'phone' : ''}`} href={link} style={style} target="_blank" rel="noreferrer">
        
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