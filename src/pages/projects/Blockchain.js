import { Pages } from "../../constants/constants";
import Header from "../../components/header/Header";
import Project from "../../components/project/Project";
import PageHeader from "../../components/PageHeader";
import '../../components/project/Project.css';

const Blockchain = () => {
  return (
    <div className="App projects">
        <Header activeIndex={Pages.PROJECTS}/>
        <PageHeader title="Blockchain" />

        <div className="container">

        <Project title = "Oryn" img="oryn"
          firstText="This blockchain project was made during the EthGlobal Cannes Hackathon. Oryn is a hardware-secured, on-chain password manager where your Ledger acts as the only key"
          secondText="Click here to see the website"
          link='https://evairson.github.io/Oryn-docs/'
        />

        <Project title = "Greenlock" img="greenlock"
          firstText="Our team Greelock made a project that transforms land conservation by tokenizing Environmental protections as NFTs. We won the third price in the XRPL track at the Paris Blockchain Week Hackathon 2025."
          secondText="Click here to see a demo"
          link='https://youtu.be/e0_1su9Vn3c'
        />

        <Project title = "Brist" img="brist"
          firstText="Brist is a personal project realised during a hackathon. It uses the Ethereum blockchain to know the entries of workers in a construction site."
          secondText="Click here to see a demo"
          link='https://youtu.be/phc41l44FcY'
        />

        <Project title = "Guestbook" img="guestbook"
          firstText="This is a blockchain project made with the ethereum blockchain. It is a guestbook where you can leave a message and see the messages of other people."
          secondText="Click here to see the website"
          link='/guestbook'
        />




        </div>

    </div>
  )
}

export default Blockchain;
