import { Pages } from "../constants/constants";
import Header from "../components/header/Header";
import AboutInfo from "../components/AboutInfo";

const About = () => {
  return (
    <div className="about">
      <Header activeIndex={Pages.ABOUT}/> 
      <h1>About Me</h1>
      <div className="container">
          <img src="ressources/picture_eva.JPG" alt="" className="profil_img"/>
          <div className="about_text">
              <p>
                  Hi, my name is Eva, and I’m pursuing a dual degree in Mathematics and Computer Science. My passion for technology and programming began when I was just 8 years old.
              </p>
              <p>
              I have gained several skills thanks to my courses, as well as my personal experience, whether through internships, competitions, projects, or self-learning
              </p>
          </div>
      </div>
      <div className="container about_info_container">
          
            <AboutInfo icon="mobile">
                <p>In 2023, I started developing mobile applications using Swift.</p>
                <p>In 2024, I participated in and won the Swift Student Challenge organized by Apple.</p>
                <p>Afterward, I worked with other technologies like Kotlin, React Native, and Flutter to build mobile apps.</p>
                <p>I also earned a Swift certification from Certiport.</p>
            </AboutInfo>
            <AboutInfo icon="website"> 
                <p>I’ve been making websites since I was 12 years old</p>
                <p>Over time, I’ve learned to work with HTML, CSS, JavaScript, React, PHP, Flask, and other technologies</p>
                <p>I made websites for clients, school projects, and personal projects</p>
                <p>I also teach children how to code websites (HTML, CSS, Flask) at a coding school.</p>
            </AboutInfo>
          <AboutInfo icon="blockchain">
            <p>I got into blockchain by taking a course organized by XRPL Commons, where I learned the basics of how it works.</p>
            <p>After that, I joined a hackathon and built a blockchain project for the construction industry</p>
            <p>I’ve also worked on some personal projects using the Ethereum blockchain.</p>
        </AboutInfo>
            <AboutInfo icon="programming">
                <p>Aside from that, I’ve also worked with Python, Java, and C on school projects.</p>
                <p>I’m really interested in cybersecurity too. I’ve learned a lot from courses and spent time solving challenges on Root-Me.</p>
                <a href="https://www.root-me.org/herson?lang=fr" target="_blank" rel="noreferrer">Check out my Root-Me profile here!</a>
            </AboutInfo>    
      </div>
  </div>
  );
}

export default About;

