import { Pages } from "../../constants/constants";
import Header from "../../components/header/Header";
import Project from "../../components/project/Project";
import PageHeader from "../../components/PageHeader";
import '../../components/project/Project.css';

const AppProject = () => {
  return (
    <div className="App projects">
        <Header activeIndex={Pages.PROJECTS}/>
        <PageHeader title="Mobile App" />

        <div className="container">


        <Project title = "BoostIn" img="boostin"
            firstText="BoostIn is an application for students and entrepreneurs who want to be help with their project. It's a community of people who want to help each other. I am the cofounder of the project with Enzo Sakhinis."
            secondText="The app is available on IOS and Android."
            link={"https://boostin.fr"}
            phone={true}
        />

        <Project title = "Telenews" img="telenews"
            firstText="Telenews is an application for Telecom Paris students to see all of the information about the information of associative life. This is an opensource project"
            secondText="The app is available on IOS and Android."
            link={"https://telenews.bde-telecom-paris.fr"}
            phone={true}
        />

        <Project title = "HubStep" img="hubstep" 
          firstText="This is a personal project available on IOS. In this app you can find some place to dance or listen to music." 
          secondText="This is the link to download the app :"
          link='https://apps.apple.com/fr/app/hubstep/id6499101202'
          phone={true}
        />

        <Project title = "HealthyMind" img="healthymind" 
          firstText="This is a personal project made for the apple swift student challenge. It was one of the 350 winners. 
          The app offers a daily meditation, a mood and habit tracker, and a journal."
          secondText="Click to view the Git repository. "
          link={"https://github.com/evairson/healthy-mind"}
          phone={true}
        />

        <Project title = "Onlyfun" img="onlyfun" 
            firstText="This is a client project. The app is a social network for people who want to meet new people and have fun.
            I participated in the development of the app during 5 months."
            secondText="The app will be available soon. "
            
            phone={true}
        />


        </div>

    </div>
  )
}

export default AppProject;