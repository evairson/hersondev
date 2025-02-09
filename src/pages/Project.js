import { Pages } from "../constants/constants";
import Header from "../components/header/Header";
import Card from "../components/card/Card";


const Project = () => {
  return (
    <div>
    <Header activeIndex={Pages.PROJECTS}/> 
    <div id='projects' name="projects" className="project_page">
    <h1>My Projects</h1>


    <div className="card_container">
      <Card title="Game" link={Pages.GAME} stop={true}/>
      <Card title="Mobile App" link={Pages.APP} stop={true}/>
      <Card title="Web Site | Blockchain" link={Pages.WEBSITE} stop={true}/>
      <Card title="Scripts" link={Pages.SCRIPTS} stop={true}/>
      <Card title="3D Model" link={Pages.MODEL3D} stop={true}/>
      
      
    </div>
    </div>
    </div>
  );
}

export default Project;