import { Pages } from "../../constants/constants";
import Header from "../../components/header/Header";
import Project from "../../components/project/Project";
import '../../components/project/Project.css';

const Script = () => {
    return (
        <div className="App projects">
        <Header activeIndex={Pages.PROJECTS}/> 
        <h1>Scripts</h1>

        <div className="container">

        <Project title="Réseaux de neurones" img="etudiant" 
          firstText="This project was created for the artificial intelligence course I teach to children aged 14 to 18. It is a script that uses neural networks to predict students' success."
          secondText="Click here to see the code"
          link='https://colab.research.google.com/drive/1_pmH3KyT5XvH-pFLZEA5b_HuewKctj6R?usp=sharing'
          
        />

        <Project title="Réseaux de neurones" img="pokemon"
          firstText="This project was created for the artificial intelligence course I teach to children aged 14 to 18. It is a script that uses neural networks to invent new names of pokemons."
          secondText="Click here to see the code"
          link={"https://colab.research.google.com/drive/1GqylggZGm34Sx5tp-7IZ0x68VQhTP3RH?usp=sharing"}
          
        />

        <Project title="Bot Discord" img="bot" 
            firstText="This is a script with challenges to discover Discord bots with Python."
            secondText="Click here to see the code"
            link={"https://colab.research.google.com/drive/1cKiVvmQZbBzKWdrrQNiKZRQcWlPF_dLn?usp=sharing"}
        />

        <Project title="Shell" img="shell"
            firstText="This is a school project where we had to create a simple shell in C."
            secondText="The git repository will be available soon. "
            link="/"
        />

        </div>

    </div>
    );
}

export default Script;