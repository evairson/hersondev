import { Pages } from "../constants/constants";
import { categories } from "../data/projects";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";


const Project = () => {
  return (
    <div>
    <Header activeIndex={Pages.PROJECTS}/>
    <div className="page">
      <PageHeader title="My Projects" subtitle="Pick a category to explore my work." />

      <div className="category_grid">
        {categories.map((category, index) => (
          <Link key={category.id} to={category.link} className="panel panel--interactive category_tile" style={{ animationDelay: `${index * 60}ms` }}>
            <img src={`/ressources/icons/${category.icon}.png`} alt="" />
            <div>
              <h2>{category.title}</h2>
              <p>{category.projects.map((project) => project.title).slice(0, 3).join(' · ')}</p>
            </div>
            <span className="category_tile__count">{category.projects.length}</span>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Project;
