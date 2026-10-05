import { Pages } from "../../constants/constants";
import { getCategory } from "../../data/projects";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Project from "../../components/project/Project";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";

const CategoryPage = ({ id }) => {
  const category = getCategory(id);

  return (
    <div>
      <Header activeIndex={Pages.PROJECTS}/>
      <div className="page">
        <Link to={Pages.PROJECTS} className="back_link">← All projects</Link>
        <PageHeader title={category.title} subtitle={`${category.projects.length} projects`} />

        <div className="project_grid">
          {category.projects.map((project, index) => (
            <Project key={project.title} {...project} style={{ animationDelay: `${index * 60}ms` }} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
