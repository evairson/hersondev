import { Pages } from "../../constants/constants";
import Header from "../../components/header/Header";
import Project from "../../components/project/Project";
import PageHeader from "../../components/PageHeader";
import '../../components/project/Project.css';

const WebSite = () => {
  return (
    <div className="App projects">
        <Header activeIndex={Pages.PROJECTS}/>
        <PageHeader title="Website" />

        <div className="container">

        <Project title = "devstacker" img="devstacker"
          firstText="This is a website that I made for a group of freelancers. I made the design and the development of the website."
          secondText="This is the link to the website :"
          link='https://devstacker.fr'
        />

        <Project title = "Visual Space" img="visualspace"
          firstText="This is a client website that I remade with a new design and new features. I also improved the SEO and the speed of the website."
          secondText="This is the link to the website :"
          link='https://visualspace.eu'
        />

        <Project title = "portfolio" img="hersondev"
          firstText="This website is a personal project made with react. It is a portfolio to present my projects and my skills."
          secondText="Click here to see the git repository"
          link='https://github.com/evairson/hersondev'
        />

        <Project title = "social network" img="socialnetwork"
            firstText="This website is a school project made with PHP HTML and CSS. It is a social network where you can create an account, post, comment and like."
            secondText="Click here to see the git repository"
            link='https://github.com/kyyyliannnn/projet'
          />

        </div>

    </div>
  )
}

export default WebSite;
