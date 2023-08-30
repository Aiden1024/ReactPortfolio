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
        Education: {
            Title:"教育背景",
            School1:"多伦多大学 - 加拿大，多伦多",
            Edu1:"本科",
            Description1:"学校排名：全球21位，加拿大1位\nGPA：(3.54/4.0)\n计算机科学&管理学 - 专业淘汰率(75%)\n学位：荣誉理学士 - 高度荣誉",
            School2:"温斯顿丘吉尔 - 加拿大，温哥华",
            Edu2:"高中",
            Description2:"曾代表学校参加不列颠哥伦比亚大学物理奥运大赛\n在12年级创立Python社团并拥有20位学生"

        },
        WorkExp: {
            Title:"工作经历",
            Job1:"华夏城视网络电视股份有限公司 - 中国，深圳",
            Type:"实习",
            Description1:"前端开发：Vue, React的架构了解与使用。"
        },
    },

    Portfolio: {
        Title: "作品集",
        SubTitle: "代码不会欺骗，但有时注释会。",
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