import { Pages } from "../constants/constants";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import PageHeader from "../components/PageHeader";


const Project = () => {
  return (
    <div>
    <Header activeIndex={Pages.PROJECTS}/>
    <div className="page">
      <PageHeader title="My Projects" subtitle="Pick a category to explore my work." />

      <div className="nav_card_list">
        <Card title="Game" link={Pages.GAME} stop={true}/>
        <Card title="Mobile App" link={Pages.APP} stop={true}/>
        <Card title="Web Site" link={Pages.WEBSITE} stop={true}/>
        <Card title="Blockchain" link={Pages.BLOCKCHAIN} stop={true}/>
        <Card title="Other" link={Pages.OTHER} stop={true}/>
      </div>
    </div>
    </div>
  );
}

export default Project;