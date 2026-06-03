import CompetencesInfo from "../components/CompetencesInfo";
import Header from "../components/header/Header";
import PageHeader from "../components/PageHeader";
import { Pages } from "../constants/constants";

const skills = [
    {
        id: "web",
        icon: "website",
        title: "Web Development",
        groups: [
            { label: "Frontend", items: ["HTML", "CSS", "ReactJS", "TailwindCSS", "Wordpress", "PHP"] },
            { label: "Backend", items: ["Javascript", "Firebase", "Flask", "PHP"] },
        ],
    },
    {
        id: "mobile",
        icon: "mobile",
        title: "Mobile Development",
        groups: [
            { label: "Android", items: ["Java", "Kotlin"] },
            { label: "iOS", items: ["Swift"] },
            { label: "Cross-platform", items: ["React Native", "Flutter"] },
        ],
    },
    {
        id: "blockchain",
        icon: "blockchain",
        title: "Blockchain",
        groups: [
            { label: "Blockchain", items: ["Ethereum", "XRPL", "Polkadot"] },
            { label: "Smart Contract", items: ["Solidity", "Rust"] },
        ],
    },
    {
        id: "programming",
        icon: "programming",
        title: "Programming",
        groups: [
            { label: "Languages", items: ["Python", "Java", "C"] },
        ],
    },
    {
        id: "data",
        icon: "programming",
        title: "Data & AI",
        groups: [
            { label: "Data", items: ["MySQL", "Firebase", "Pandas", "Numpy"] },
            { label: "AI", items: ["Tensorflow", "Keras"] },
        ],
    },
    {
        id: "game",
        icon: "programming",
        title: "Game Development",
        groups: [
            { label: "Engines", items: ["Construct", "Unity"] },
            { label: "Languages", items: ["Java"] },
        ],
    },
];

const Competences = () => {
    return (
        <div className="competences">
            <Header activeIndex={Pages.COMPETENCES} />

            <div className="page">
                <PageHeader title="My Skills" subtitle="The tools and technologies I work with." />

                <div className="card_grid">
                    {skills.map((skill) => (
                        <CompetencesInfo
                            key={skill.id}
                            id={skill.id}
                            icon={skill.icon}
                            title={skill.title}
                            groups={skill.groups}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Competences;
