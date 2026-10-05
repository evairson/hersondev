import CompetencesInfo from "../components/CompetencesInfo";
import Header from "../components/header/Header";
import PageHeader from "../components/PageHeader";
import Footer from "../components/footer/Footer";
import { Pages } from "../constants/constants";

const skills = [
    {
        id: "web",
        icon: "website",
        title: "Web Development",
        groups: [
            { label: "Frontend", items: ["HTML", "CSS", "React", "Next.js", "TailwindCSS", "Three.js", "Vite", "WordPress"] },
            { label: "Backend", items: ["JavaScript", "TypeScript", "NestJS", "Prisma", "Flask", "PHP", "Firebase"] },
            { label: "Other", items: ["Docker", "OAuth2 / OIDC", "SEO"] },
        ],
    },
    {
        id: "mobile",
        icon: "mobile",
        title: "Mobile Development",
        groups: [
            { label: "iOS", items: ["Swift", "SwiftUI"] },
            { label: "Android", items: ["Java", "Kotlin"] },
            { label: "Cross-platform", items: ["Flutter", "React Native"] },
        ],
    },
    {
        id: "blockchain",
        icon: "blockchain",
        title: "Blockchain",
        groups: [
            { label: "Blockchain", items: ["Ethereum", "Base", "XRPL", "Polkadot"] },
            { label: "Smart Contract", items: ["Solidity", "Rust", "Hardhat", "ethers.js"] },
            { label: "Security", items: ["Slither", "Ledger DMK"] },
        ],
    },
    {
        id: "legacy",
        icon: "programming",
        title: "Legacy & Mainframe",
        groups: [
            { label: "Ecosystem", items: ["COBOL", "JCL", "Copybooks", "DB2", "CICS"] },
            { label: "Analysis", items: ["Static parsing", "Dependency graphs", "Variable tracing"] },
        ],
    },
    {
        id: "programming",
        icon: "programming",
        title: "Programming",
        groups: [
            { label: "Languages", items: ["Python", "TypeScript", "Java", "C", "OCaml", "Dart"] },
            { label: "Security", items: ["Web security", "Cryptography", "CTF challenges"] },
        ],
    },
    {
        id: "data",
        icon: "programming",
        title: "Data & AI",
        groups: [
            { label: "Data", items: ["PostgreSQL", "MySQL", "Firebase", "Pandas", "NumPy"] },
            { label: "AI", items: ["TensorFlow", "Keras"] },
        ],
    },
    {
        id: "game",
        icon: "programming",
        title: "Game Development",
        groups: [
            { label: "Engines", items: ["Construct", "Unity"] },
            { label: "Languages", items: ["Java", "OCaml"] },
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
            <Footer />
        </div>
    );
}

export default Competences;
