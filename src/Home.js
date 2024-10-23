import { Pages } from "./constants";
import Header from "./header/Header";
import Card from "./widget/Card";
import './App.css';


function Home() {
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
               <a href="#projects" className='button_outline'>SEE MY WORK</a> 
               
               <div className='content_text__img'>
               <img src="ressources/arrow_down.png" alt="" />
               </div>
              </div>
              
              
              <a href="/" className='button_fill'>CONTACT ME FOR A QUOTE</a>
            </div>
            
          </div>

          <div className="content_img">
            <img src="ressources/avatar_eva.png" alt="" />
          </div>
         
        </div>

        <div className="container me">

        
        <div id='projects'>
        <h1>My Projects</h1>


        <div className="card_container">
          <Card title="Game" link={Pages.GAME}/>
          <Card title="Mobile App" />
          <Card title="Web Site | Blockchain" />
          <Card title="Custom Scripts"/>
          <Card title="3D Model" link={Pages.MODEL3D}/>
          
          
        </div>
        </div>

        <div id='projects'>

        <h1>My Skills</h1>

        <div className="card_container">
          <Card title="Game" link={Pages.GAME} reverse={true}/>
          <Card title="Mobile App" reverse={true}/>
          <Card title="Web Site | Blockchain" reverse={true} />
          <Card title="Custom Scripts" reverse={true}/>
          <Card title="Other skills" reverse={true}/>
          
          
        </div>
        </div>
        

        </div>
    </div>
        
  )
}

export default Home;