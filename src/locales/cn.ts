const cn = {
    NavBar: {
        NavHome:"主页",
        NavAbout:"关于",
        NavPortfolio:"作品集",
        NavExp:"经验",
        NavContact:"联系"
    },

    Home: {
        Title: "",
        SubTitle: "浩瀚宇宙中的一粒星尘，茫茫人海间的一位过客。\n平凡之人，但绝不平庸！",
        Button: "作品集"
    },

    About: {
        Title: "",
        Education: "",
        WorkExp: "",
    },

    Portfolio: {
        Title: "",
        SubTitle: "",
        Demo: "",
        Code: "",
    },

    Contact: {
        Title: "",
        SubTitle: "",
        Form: {
            NameField: "",
            EmailField: "",
            Submit: ""
        },
    SocialLinks: {
        WeChat: "",
        Github: "",
        Mail:""
        }
        
    }
}

export type RequiredLocaleType = typeof cn;
export default cn;