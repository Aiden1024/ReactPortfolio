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
        SubTitle: "浩瀚宇宙中的粒粒星尘，茫茫人海间的芸芸众生。总会有地上的生灵，敢于直面雷霆的威光。我是平凡之人，但我绝不平庸。",
        Button: "作品集"
    },

    About: {
        Title: "关于我",
        Education: "",
        WorkExp: "",
    },

    Portfolio: {
        Title: "作品集",
        SubTitle: "最初的鸟儿是不会飞翔的，飞翔是它们勇敢跃入峡谷的奖励。",
        Demo: "演示",
        Code: "代码",
    },

    Experience: {
        Title: "开发经验",
        SubTitle: "只要不失去你的崇高，整个世界都会为你敞开。"
    },

    Contact: {
        Title: "联系我",
        SubTitle: "你好，世界。",
        Form: {
            NameField: "请输入姓名",
            EmailField: "请输入电子邮箱",
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