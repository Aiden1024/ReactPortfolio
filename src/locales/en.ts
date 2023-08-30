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
        Education: "",
        WorkExp: "",
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