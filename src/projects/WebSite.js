import { Pages } from "../constants";
import Header from "../header/Header";
import Project from "./Project";
import './Project.css';

function WebSite() {
  return (
    <div className="App projects">
        <Header activeIndex={Pages.PROJECTS}/> 
        <h1>Website and Blockchain</h1>

        <div className="container">

        <Project title = "Visual Space" img="visualspace" 
          firstText="This is a client website that I remade with a new design and new features. I also improved the SEO and the speed of the website."
          secondText="This is the link to the website :"
          link='https://visualspace.eu'
          
        />

        <Project title = "Brist (blockchain)" img="brist"
          firstText="Brist is a personal project realised during a hackathon. It uses the Ethereum blockchain to know the entries of workers in a construction site."
          secondText="Click here to see a demo"
          link='https://youtu.be/phc41l44FcY'
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

        <Project title = "Guestbook (blockchain) " img="guestbook"
          firstText="This is a blockchain project made with the ethereum blockchain. It is a guestbook where you can leave a message and see the messages of other people."
          secondText="Click here to see the website"
          link='/guestbook'
        />


        </div>

    </div>
  )
}

export default WebSite;