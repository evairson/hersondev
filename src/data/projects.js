import { Pages } from '../constants/constants';

// Every project shown on the site, grouped by category.
// img: file name in public/ressources/projects (without .png), optional.
// phone: true for tall mobile screenshots.
// date: 'YYYY-MM' (or 'YYYY' when the month is unknown), used to sort projects.

export const categories = [
    {
        id: 'app',
        title: 'Mobile App',
        link: Pages.APP,
        icon: 'mobile',
        projects: [
            {
                title: 'Telenews',
                date: '2025-11',
                img: 'telenews',
                logo: 'telenews-logo',
                phone: true,
                tags: ['Mobile', 'NestJS', 'PostgreSQL'],
                description: 'The official app of the Télécom Paris student union (BDE) to follow everything happening in student life. Clubs publish posts and events from an admin space, with admin and writer roles, and students sign in with their school account.',
                note: 'Available on iOS and Android.',
                link: 'https://telenews.bde-telecom-paris.fr',
            },
            {
                title: 'Forum Télécom Paris',
                date: '2026-09',
                logo: 'forum-app',
                logoBg: '#ffffff',
                tags: ['Flutter', 'Mobile'],
                description: 'The mobile app of the Télécom Paris company fair: interactive map of the stands, list of companies, CV library with QR codes and a contest for students.',
                note: 'iOS and Android.',
                link: 'https://forumtelecomparis.fr',
            },
            {
                title: 'BoostIn',
                date: '2026-02',
                img: 'boostin',
                phone: true,
                description: 'An app for students and entrepreneurs who want help with their projects: a community of people helping each other. I co-founded the project with Enzo Sakhinis.',
                note: 'Available on iOS and Android.',
                link: 'https://boostin.fr',
            },
            {
                title: 'HealthyMind',
                date: '2024-02',
                img: 'healthymind',
                phone: true,
                tags: ['Swift', 'SwiftUI'],
                description: 'Made for the Apple Swift Student Challenge, where it was one of the 350 winners. The app offers a daily meditation, a mood and habit tracker, and a journal.',
                link: 'https://github.com/evairson/healthy-mind',
            },
            {
                title: 'HubStep',
                date: '2024-05',
                img: 'hubstep',
                phone: true,
                description: 'A personal iOS app to find places to dance or listen to music.',
                link: 'https://apps.apple.com/fr/app/hubstep/id6499101202',
            },
            {
                title: 'Onlyfun',
                date: '2024-10',
                img: 'onlyfun',
                phone: true,
                description: 'A client project: a social network to meet new people and have fun. I worked on the development of the app for 5 months.',
                note: 'Coming soon.',
            },
        ],
    },
    {
        id: 'blockchain',
        title: 'Blockchain',
        link: Pages.BLOCKCHAIN,
        icon: 'blockchain',
        projects: [
            {
                title: 'Oryn',
                date: '2026-04',
                img: 'oryn',
                tags: ['Solidity', 'Base', 'Ledger', 'TypeScript'],
                description: '2nd place in the Ledger track at the ETHGlobal Cannes 2026 hackathon. A hardware-secured, on-chain password manager where your Ledger is the only key: a Chrome extension encrypts passwords with AES-256-GCM using keys derived from Ledger signatures, and stores them on Base.',
                link: 'https://evairson.github.io/Oryn-docs/',
            },
            {
                title: 'Vigil3',
                date: '2025-10',
                img: 'vigil3',
                tags: ['TypeScript', 'Solidity', 'AI agents'],
                description: '1st place in the Hardhat track at the ETHGlobal online hackathon 2025. A VS Code extension that audits Solidity smart contracts. It runs Slither, highlights vulnerabilities directly in the editor, and sends the results to AI agents on Agentverse for explanations and fixes.',
                link: 'https://github.com/evairson/extension-vigil3',
            },
            {
                title: 'Greenlock',
                date: '2025-04',
                img: 'greenlock',
                tags: ['XRPL', 'NFT'],
                description: 'Tokenizing environmental protections as NFTs to transform land conservation. Our team won third place in the XRPL track of the Paris Blockchain Week Hackathon 2025.',
                link: 'https://youtu.be/e0_1su9Vn3c',
            },
            {
                title: 'Brist',
                date: '2024',
                img: 'brist',
                tags: ['Ethereum'],
                description: 'Built during a hackathon: uses the Ethereum blockchain to track the entries of workers on a construction site.',
                link: 'https://youtu.be/phc41l44FcY',
            },
            {
                title: 'Guestbook',
                date: '2025-01',
                img: 'guestbook',
                tags: ['Ethereum', 'Solidity', 'React'],
                description: 'A guestbook on the Ethereum blockchain where you can leave a message and read the messages of other people.',
                link: Pages.GUESTBOOK,
                linkLabel: 'Try it',
            },
        ],
    },
    {
        id: 'website',
        title: 'Web Site',
        link: Pages.WEBSITE,
        icon: 'website',
        projects: [
            {
                title: 'Forum Antique',
                date: '2025-09',
                img: 'forum-antique',
                tags: ['Three.js', 'React', 'TypeScript'],
                description: 'The 3D website of the "Forum Antique" campaign list for the Télécom Paris company fair association. You walk through an ancient temple built with Three.js, where engraved stones lead to the members, articles, history and gallery, with our hymn playing in the background.',
            },
            {
                title: 'MaD Vegetable Baskets',
                date: '2026-08',
                img: 'paniers',
                tags: ['Next.js', 'Prisma', 'PostgreSQL'],
                description: 'An ordering platform for organic, local fruit and vegetable baskets for Télécom Paris students, run by the MaD (Make A Difference) association. Students sign in with their school account, order during a campaign and pay with Lydia; admins import the producer catalog from a PDF.',
                link: 'https://paniers-mad.rezel.net',
            },
            {
                title: 'Télécom Voile',
                date: '2026-07',
                img: 'televoile',
                tags: ['Next.js', 'Tailwind'],
                description: 'The website of the Télécom Paris sailing association: its activities, its crew, and a sponsoring page for companies supporting our team at the Course Croisière EDHEC.',
                link: 'https://televoile.rezel.net',
            },
            {
                title: 'BDS Equipment Loans',
                date: '2026-05',
                tags: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
                description: 'An equipment lending platform for the Télécom Paris sports association. Members sign in with their school account (OAuth2 via Rezel) and book equipment on a calendar; admins manage requests, inventory and email reminders.',
                link: 'https://github.com/evairson/emprunt-front',
            },
            {
                title: 'Visual Space',
                date: '2026-07',
                img: 'visualspace',
                tags: ['SEO'],
                description: 'The website of an interior architecture and event design studio based in Munich, Paris and Sicily. I redesigned it with a new editorial look, a multilingual version (EN, FR, ES, DE, IT) and better SEO.',
                link: 'https://visualspace.eu',
            },
            {
                title: 'Portfolio',
                date: '2024-10',
                img: 'hersondev',
                tags: ['React'],
                description: 'This website! A personal project made with React to present my projects and my skills.',
                link: 'https://github.com/evairson/hersondev',
            },
            {
                title: 'Social Network',
                date: '2023-03',
                img: 'socialnetwork',
                tags: ['PHP', 'HTML', 'CSS'],
                description: 'A school project: a social network where you can create an account, post, comment and like.',
                link: 'https://github.com/kyyyliannnn/projet',
            },
        ],
    },
    {
        id: 'game',
        title: 'Game',
        link: Pages.GAME,
        icon: 'programming',
        projects: [
            {
                title: 'Catan',
                date: '2024',
                img: 'catan',
                tags: ['Java'],
                description: 'A school project inspired by the board game Catan, developed in a team.',
                link: 'https://github.com/evairson/catan',
            },
            {
                title: 'Tower Defense Mario',
                date: '2023-11',
                img: 'tower-defense',
                tags: ['Java'],
                description: 'A school project: a Tower Defense game developed in a team of 2.',
                link: 'https://github.com/evairson/tower-defense',
            },
            {
                title: 'Pacman',
                date: '2023-09',
                img: 'pacman',
                tags: ['Java'],
                description: 'A school project inspired by the game Pac-Man, developed in a team.',
                link: 'https://github.com/evairson/pacman',
            },
            {
                title: 'Unipoly',
                date: '2024-10',
                img: 'unipoly',
                tags: ['OCaml'],
                description: 'A university project: a Monopoly set on a university campus, playable in the terminal, developed in a team using functional programming in OCaml.',
                note: 'Repository coming soon.',
            },
        ],
    },
    {
        id: 'other',
        title: 'Other',
        link: Pages.OTHER,
        icon: 'programming',
        projects: [
            {
                title: 'Nestra',
                date: '2026-05',
                img: 'nestra',
                tags: ['Startup', 'COBOL', 'Mainframe'],
                description: 'The startup I am co-founding: Nestra turns the COBOL mainframe systems of banks and insurers into a clear, searchable map.',
                link: 'https://nestra.dev',
            },
            {
                title: 'OCaml Compiler',
                date: '2025-10',
                tags: ['OCaml'],
                description: 'A school project at Télécom Paris: a compiler written in a team of 4 using OCaml.',
            },
            {
                title: 'Neural networks: student success',
                date: '2024-12',
                img: 'etudiant',
                tags: ['Python', 'AI'],
                description: 'Made for the artificial intelligence course I teach to teenagers aged 14 to 18: a script that uses neural networks to predict students\' success.',
                link: 'https://colab.research.google.com/drive/1_pmH3KyT5XvH-pFLZEA5b_HuewKctj6R?usp=sharing',
            },
            {
                title: 'Neural networks: Pokémon names',
                date: '2024-12',
                img: 'pokemon',
                tags: ['Python', 'AI'],
                description: 'Made for the artificial intelligence course I teach to teenagers aged 14 to 18: a script that uses neural networks to invent new Pokémon names.',
                link: 'https://colab.research.google.com/drive/1GqylggZGm34Sx5tp-7IZ0x68VQhTP3RH?usp=sharing',
            },
            {
                title: 'Discord Bot',
                date: '2024',
                img: 'bot',
                tags: ['Python'],
                description: 'A notebook with challenges to discover Discord bots with Python.',
                link: 'https://colab.research.google.com/drive/1cKiVvmQZbBzKWdrrQNiKZRQcWlPF_dLn?usp=sharing',
            },
            {
                title: 'Shell',
                date: '2025-02',
                img: 'shell',
                tags: ['C'],
                description: 'A school project: a simple shell written in C.',
                link: 'https://github.com/Grimmins/fsh',
            },
            {
                title: 'Two-party computation',
                date: '2025-03',
                img: 'two_party',
                tags: ['Cryptography'],
                description: 'A school project: a system where two parties compute a function together without revealing their inputs.',
                note: 'Repository coming soon.',
            },
        ],
    },
];

// Most recent first; a year without month counts as mid-year.
const sortKey = (project) => (project.date.length === 4 ? `${project.date}-06` : project.date);

categories.forEach((category) => {
    category.projects.sort((a, b) => sortKey(b).localeCompare(sortKey(a)));
});

export const getCategory = (id) => categories.find((category) => category.id === id);

// Projects shown on the home page, in this order.
const featuredTitles = ['Oryn', 'Nestra', 'Telenews', 'BoostIn', 'Forum Télécom Paris', 'Two-party computation'];

const allProjects = categories.flatMap((category) => category.projects);

export const featuredProjects = featuredTitles.map((title) =>
    allProjects.find((project) => project.title === title)
);
