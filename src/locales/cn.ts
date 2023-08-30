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
        SubTitle: "浩瀚宇宙中的粒粒星尘，茫茫人海间的芸芸众生。\n总会有地上的生灵，敢于直面雷霆的威光。\n我是平凡之人，但绝不平庸。",
        Button: "作品集"
    },

    About: {
        Title: "关于我",
        Education: "",
        WorkExp: "",
    },

    Portfolio: {
        Title: "作品集",
        SubTitle: "代码不会欺骗，但注释有时会。",
        Demo: "演示",
        Code: "代码",
    },

    Experience: {
        Title: "开发经验",
        SubTitle: "宇宙的尽头，就是去码头整点薯条。"
    },

    Contact: {
        Title: "联系",
        SubTitle: "你好，世界。",
        Form: {
            NameField: "姓名",
            EmailField: "邮箱",
            Submit: "传达"
        },
    SocialLinks: {
        WeChat: "微信",
        Github: "Github",
        Mail:"邮箱"
        }
        
    }
}

export type RequiredLocaleType = typeof cn;
export default cn;