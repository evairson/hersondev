import { Pages } from "../constants/constants";
import { categories, featuredProjects } from "../data/projects";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import Project from "../components/project/Project";
import { Link } from "react-router-dom";
import '../styles/App.css';
import '../components/project/Project.css';
import { Link as ScrollLink, Element } from "react-scroll";

const highlights = [
  { value: 'Winner', label: 'Apple Swift Student Challenge 2024' },
  { value: '1st place', label: 'Hardhat track · ETHGlobal online 2025 with Vigil3' },
  { value: '2nd place', label: 'Ledger track · ETHGlobal Cannes 2026 with Oryn' },
];

const Home = () => {
  return (
    <div className="App">
    <Header activeIndex={Pages.HOME}/> 

        <div className="container hero">
          <div className="content_text">
            <span className="hero_badge"><span className="hero_badge__dot" /> Co-founder of Nestra</span>
            <div className='flex'> <h1 className='first_text'> Hi ! </h1> <div className='overflow_hidden'><h1 className='last_text'>My name is Eva</h1></div> </div>
            <div className='overflow_hidden'><h1 className='slide_top'>I’m an <color>Engineering Student</color></h1></div> 

            <p>I study at Télécom Paris, I’m the co-founder of Nestra and I love hackathons. I build mobile apps, websites and blockchain projects.</p>
            <div className="content_text__buttons">
              <div className='see_my_work'>
               <ScrollLink to="projects" className='button_outline' smooth={true} offset={-80}
                duration={500}>SEE MY WORK</ScrollLink> 
               
               <div className='content_text__img'>
               <img src="/ressources/arrow_down.png" alt="" />
               </div>
              </div>
              
              <div className="contact_me">
              <a href="mailto:eva.herson.pro@gmail.com"
               className='button_fill'>CONTACT ME</a>
               </div>
            </div>

          </div>

          <div className="content_img">
            <img src="/ressources/avatar_eva.png" alt="Illustration of Eva coding" />
          </div>
         
        </div>

        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <section className="nestra_spotlight">
          <div className="panel nestra_spotlight__card">
            <div className="nestra_spotlight__text">
              <span className="section_eyebrow">Currently building · Co-founder</span>
              <h2>Nestra</h2>
              <p className="nestra_spotlight__tagline">Map your COBOL estate.</p>
              <p>
                The startup I’m co-founding: Nestra turns old COBOL mainframe systems of banks and insurers into a clear, searchable map.
              </p>
              <a href="https://nestra.dev" target="_blank" rel="noreferrer" className="button_fill">VISIT NESTRA.DEV</a>
            </div>
            <a href="https://nestra.dev" target="_blank" rel="noreferrer" className="nestra_spotlight__media">
              <img src="/ressources/projects/nestra.png" alt="Nestra website: Map your COBOL estate" />
            </a>
          </div>
        </section>

        <Element name="projects" className="home_featured">
          <div className="section_heading">
            <div>
              <span className="section_eyebrow">Selected work</span>
              <h2>Featured projects</h2>
            </div>
            <Link to={Pages.PROJECTS} className="text_link">See all projects →</Link>
          </div>
          <div className="project_grid project_grid--featured">
            {featuredProjects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </Element>

        <div className="home_sections">

          <section className="panel home_section">
            <h2 className="home_section__title">My Projects</h2>
            <div className="home_section__cards">
              {categories.map((category) => (
                <Card key={category.id} title={category.title} link={category.link} count={category.projects.length}/>
              ))}
            </div>
          </section>

          <section className="panel home_section">
            <h2 className="home_section__title">My Skills</h2>
            <div className="home_section__cards">
              <Card title="Web Site" link={`${Pages.COMPETENCES}#web`}/>
              <Card title="Mobile App" link={`${Pages.COMPETENCES}#mobile`}/>
              <Card title="Blockchain" link={`${Pages.COMPETENCES}#blockchain`}/>
              <Card title="Legacy & Mainframe" link={`${Pages.COMPETENCES}#legacy`}/>
              <Card title="Programming" link={`${Pages.COMPETENCES}#programming`}/>
              <Card title="Data & AI" link={`${Pages.COMPETENCES}#data`}/>
              <Card title="Game" link={`${Pages.COMPETENCES}#game`}/>
            </div>
          </section>

        </div>

        <Footer />
    </div>
        
  )
}

export default Home;
