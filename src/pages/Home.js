import { Pages } from "../constants/constants";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import '../styles/App.css';
import { Link as ScrollLink, Element } from "react-scroll";


const Home = () => {
  return (
    <div className="App">
    <Header activeIndex={Pages.HOME}/> 

        <div className="container">
          <div className="content_text">
            <div className='flex'> <h1 className='first_text'> Hi ! </h1> <div className='overflow_hidden'><h1 className='last_text'>My name is Eva</h1></div> </div>
            <div className='overflow_hidden'><h1 className='slide_top'>I’m a <color> Full Stack Developer </color> </h1></div> 

            <p>Welcome to my portfolio website! Here you can find my projects and my skills. </p>
            <div className="content_text__buttons">
              <div className='see_my_work'>
               <ScrollLink to="projects" className='button_outline' smooth={true}
                duration={500}>SEE MY WORK</ScrollLink> 
               
               <div className='content_text__img'>
               <img src="ressources/arrow_down.png" alt="" />
               </div>
              </div>
              
              <div className="contact_me">
              <a href="mailto:eva.herson.pro@gmail.com"
               className='button_fill'>CONTACT ME</a>
               </div>
            </div>
            
          </div>

          <div className="content_img">
            <img src="ressources/avatar_eva.png" alt="" />
          </div>
         
        </div>

        <Element name="projects" className="home_sections">

          <section className="panel home_section">
            <h2 className="home_section__title">My Projects</h2>
            <div className="home_section__cards">
              <Card title="Game" link={Pages.GAME}/>
              <Card title="Mobile App" link={Pages.APP}/>
              <Card title="Web Site" link={Pages.WEBSITE}/>
              <Card title="Blockchain" link={Pages.BLOCKCHAIN}/>
              <Card title="Other" link={Pages.OTHER}/>
            </div>
          </section>

          <section className="panel home_section">
            <h2 className="home_section__title">My Skills</h2>
            <div className="home_section__cards">
              <Card title="Web Site" link={`${Pages.COMPETENCES}#web`}/>
              <Card title="Mobile App" link={`${Pages.COMPETENCES}#mobile`}/>
              <Card title="Blockchain" link={`${Pages.COMPETENCES}#blockchain`}/>
              <Card title="Programming" link={`${Pages.COMPETENCES}#programming`}/>
              <Card title="Data & AI" link={`${Pages.COMPETENCES}#data`}/>
              <Card title="Game" link={`${Pages.COMPETENCES}#game`}/>
            </div>
          </section>

        </Element>
    </div>
        
  )
}

export default Home;