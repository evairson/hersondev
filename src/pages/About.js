import { Pages } from "../constants/constants";
import Header from "../components/header/Header";
import AboutInfo from "../components/AboutInfo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/footer/Footer";

const timeline = [
  { year: "2023", text: "Started building mobile apps with Swift." },
  { year: "2024", text: "Winner of the Apple Swift Student Challenge with HealthyMind." },
  { year: "2025", text: "3rd place in the XRPL track of the Paris Blockchain Week Hackathon with Greenlock, joined Télécom Paris, and won 1st place in the Hardhat track at the ETHGlobal online hackathon with Vigil3." },
  { year: "2026", text: "2nd place in the Ledger track at ETHGlobal Cannes with Oryn, launched Telenews for the student union, and built the apps and websites of the Forum, MaD and Télécom Voile associations." },
  { year: "Today", text: "Second-year engineering student at Télécom Paris, co-founder of Nestra, president of imp’hackt and vice-president of MaD." },
];

const About = () => {
  return (
    <div className="about">
      <Header activeIndex={Pages.ABOUT}/>
      <div className="page">
      <PageHeader title="About Me" />
      <div className="container panel about_intro">
          <img src="/ressources/picture_eva.JPG" alt="Eva Herson" className="profil_img"/>
          <div className="about_text">
              <p>
                  Hi, my name is Eva, and I’m a second-year engineering student at Télécom Paris. My passion for technology and programming began when I was just 8 years old.
              </p>
              <p>
              I have gained several skills thanks to my courses, as well as my personal experience, whether through internships, competitions, hackathons, projects, or self-learning.
              </p>
              <p>
              At Télécom Paris, I’m also involved in student life: I’m the president of imp’hackt, the cybersecurity association, and the vice-president of MaD. I’m also co-founding Nestra, a startup that maps COBOL mainframe systems for banks and insurers.
              </p>
          </div>
      </div>
      <div className="about_info_container">
          
            <AboutInfo icon="mobile">
                <p>Swift since 2023, Swift Student Challenge winner in 2024.</p>
                <p>Now also Flutter, Kotlin and React Native, with Telenews, the app of the student union.</p>
            </AboutInfo>
            <AboutInfo icon="website">
                <p>Making websites since I was 12, for clients, associations and myself.</p>
                <p>I also teach kids how to code at a coding school.</p>
            </AboutInfo>
            <AboutInfo icon="blockchain">
                <p>Started with an XRPL Commons course, then hackathons.</p>
                <p>1st in the Hardhat track at ETHGlobal’s online hackathon 2025 with Vigil3, 2nd in the Ledger track at ETHGlobal Cannes 2026 with Oryn.</p>
            </AboutInfo>
            <AboutInfo icon="programming">
                <p>Python, Java, C and OCaml through school projects.</p>
                <p>Into cybersecurity: president of imp’hackt and solving challenges on Root-Me.</p>
                <a href="https://www.root-me.org/herson?lang=fr" target="_blank" rel="noreferrer">See my Root-Me profile →</a>
            </AboutInfo>
      </div>

      <section className="timeline_section">
          <h2 className="section_title">Highlights</h2>
          <ol className="timeline">
              {timeline.map((item) => (
                  <li key={item.year + item.text}>
                      <span className="timeline__year">{item.year}</span>
                      <p>{item.text}</p>
                  </li>
              ))}
          </ol>
      </section>
  </div>
  <Footer />
  </div>
  );
}

export default About;

