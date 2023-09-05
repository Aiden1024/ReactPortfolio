import { RequiredLocaleType } from "./index";

const en : RequiredLocaleType = {
    NavBar: {
        NavHome:"Home",
        NavAbout:"About",
        NavPortfolio:"Portfolio",
        NavExp:"Experience",
        NavContact:"Contact"
    },

    Home: {
        Title: "",
        SubTitle: "\"You can't live on the edge all your life Faith, sooner or later, you'll have to jump\" - Jacknife, Mirror's Edge",
        Button: "Portfolio"
    },

    About: {
        Title: "About",
        Subtitle:"I am the storm that is approaching, provoking black clouds in isolation",
        Education: {
            Title:"Education",
            School1:"University of Toronto - Toronto, Canada",
            Edu1:"Undergraduate",
            Description1:"University Ranking: Global No.21, Canada No.1\nGPA: (3.54/4.0)\nProgram: Computer Science & Management Double Major (Disqualified Rate: 75%)\nDegree: Honours Bachelor of Science - High Distinction",
            School2:"Sir Winston Churchill Secondary - Vancouver, Canada",
            Edu2:"High School",
            Description2:"Has Represented school to attend UBC Physics Olympics\nFormed Python Club and owned 20+ student "

        },
        WorkExp: {
            Title:"Work Experience",
            Job1:"Shenzhen Media Group CUTV- Shenzhen, China",
            Type:"Internship",
            Description1:"Frontend Develop: Use of Vue, React in the web deployment."
        },
    },

    Portfolio: {
        Title: "Portfolio",
        SubTitle: "Code never lies, comments sometimes do.",
        Demo: "Demo",
        Code: "Code",
        Framework: "Framework",
        Position: "Position",
        Project1: {
            ProjectTitle: "TB DEV Personal Page",
            ProjectFramework: "React JS, tailwind CSS",
            PositionDescription:"Frontend",
            ProjectDescription: "Twinblades, one for the enemy, one for myself. Life is wortheless, if not afraid of death.",
            Date: "2023.08 - Now",
        },
        Project2: {
            ProjectTitle: "The BC Hub",
            ProjectFramework: "React Bootstrap, MERN Stack",
            PositionDescription:"Frontend, Team Management",
            ProjectDescription: "BC(Block Chain) Hub, intend to educate users and provide them with a platform to discuss cryptocurrencies and NFTs with other people.",
            Date: "2022.01 - 2022.05 ",
        },
        Project3: {
            ProjectTitle: "UTMCSSA APP",
            ProjectFramework: "Flutter, Google Firebase",
            PositionDescription:"Mobile Develop, Database Management",
            ProjectDescription: "UTMCSSA (Chinese Students & Scholars Association - UTM). The Club Management APP, borned for high efficiency, died from lack of resource. ",
            Date: "2022.08 - 2023.01 ",
        },
        Project4: {
            ProjectTitle: "Arduino RC Car",
            ProjectFramework: "Arduino, Uno, Motor, Radio Control",
            PositionDescription:"Software, Hardware design & assemble",
            ProjectDescription: "One of the best memory in summer 2022. The fullfilled of my hardware dream, thanks to the buddies from UBC engineering.",
            Date: "2022.06 - 2022.08",
        },
    },

    Experience: {
        Title: "Experience",
        SubTitle: "You do not learn how to hack. You hack to learn."
    },

    Contact: {
        Title: "Contact",
        SubTitle: "Hellow, world.",
        Form: {
            NameField: "Name",
            EmailField: "Email",
            Submit: "Let's talk"
        },

    },

    SocialLinks: {
        WeChat: "WeChat",
        Github: "Github",
        Mail:"Email",
        Resume:"Resume"
    },
    
}

export default en;