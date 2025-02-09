import { Pages } from "./constants";
import Header from "./header/Header";
import Card from "./widget/Card";
import './styles/App.css';
import { Link as ScrollLink, Element } from "react-scroll";


const Home = () => {
  return (
    <div className="App">
    <Header activeIndex={Pages.HOME}/> 

        <div className="container">
          <div className="content_text">
            <div className='flex'> <h1 className='first_text'> Hi ! </h1> <div className='overflow_hidden'><h1 className='last_text'>My name is Eva</h1></div> </div>
            <div className='overflow_hidden'><h1 className='slide_top'>I’m a <color> Full Stack Developer </color> </h1></div> 

            <p>I develop your projects, whether it's mobile apps, websites, automation, or custom scripts.</p> 
            <div className="content_text__buttons">
              <div className='see_my_work'>
               <ScrollLink to="projects" className='button_outline' smooth={true}
                duration={500}>SEE MY WORK</ScrollLink> 
               
               <div className='content_text__img'>
               <img src="ressources/arrow_down.png" alt="" />
               </div>
              </div>
              
              <div>
              <a href="mailto:eva.herson.pro@gmail.com"
               className='button_fill'>CONTACT ME</a>
               </div>
            </div>
            
          </div>

          <div className="content_img">
            <img src="ressources/avatar_eva.png" alt="" />
          </div>
         
        </div>

        <div className="container me">

        
        <Element id='projects' name="projects">
        <h1>My Projects</h1>


        <div className="card_container">
          <Card title="Game" link={Pages.GAME}/>
          <Card title="Mobile App" link={Pages.APP}/>
          <Card title="Web Site | Blockchain" link={Pages.WEBSITE}/>
          <Card title="3D Model" link={Pages.MODEL3D}/>
          
          
        </div>
        </Element>

        <div id='projects'>

        <h1>My Skills</h1>

        <div className="card_container">
          <Card title="Mobile App" link={`${Pages.COMPETENCES}#mobile`} reverse={true}/>
          <Card title="Web Site" link={`${Pages.COMPETENCES}#web`} reverse={true} />
          <Card title="Blockchain" link={`${Pages.COMPETENCES}#blockchain`} reverse={true}/>
          <Card title="Other skills" link={`${Pages.COMPETENCES}#other`} reverse={true}/>
          
        </div>
        </div>
        

        </div>
    </div>
        
  )
}

export default Home;