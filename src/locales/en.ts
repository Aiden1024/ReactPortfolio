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
        Education: {
            Title:"Education",
            School1:"University of Toronto - Toronto, Canada",
            Edu1:"Undergraduate",
            Description1:"University Ranking: Global No.21, Canada No.1\nGPA: (3.54/4.0)\nProgram: Computer Science & Management Double Major (Disqualified Rate: 75%)\nDegree: Honours Bachelor of Science - High Distinction",
            School2:"Sir Winston Churchill Secondary - Vancouver, Canada",
            Edu2:"High School",
            Description2:"Representing school to attend UBC Physics Olympics\nEstablished Python Club and has 20+ student "

        },
        WorkExp: {
            Title:"Work Experience",
            Job1:"China United Television(CUTV) - Shenzhen, China",
            Type:"Internship",
            Description1:"Frontend Develop: Use of Vue, React in the web deployment."
        },
    },

    Portfolio: {
        Title: "Portfolio",
        SubTitle: "Code never lies, comments sometimes do.",
        Demo: "Demo",
        Code: "Code",
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

    SocialLinks: {
        WeChat: "WeChat",
        Github: "Github",
        Mail:"Email",
        },
    }
}

export default en;