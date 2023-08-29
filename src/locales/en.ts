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
        SubTitle: "Change, everything you are, and everything you were. \nButterflies and Hurrican",
        Button: "Portfolio"
    },

    About: {
        Title: "About",
        Education: "",
        WorkExp: "",
    },

    Portfolio: {
        Title: "Portfolio",
        SubTitle: "It's not a bug, it's a feature.",
        Demo: "Demo",
        Code: "Code",
    },

    Experience: {
        Title: "Experience",
        SubTitle: "Code never lies, comments sometimes do."
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