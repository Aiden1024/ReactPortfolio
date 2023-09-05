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
        SubTitle: "浩瀚宇宙中的粒粒星尘，茫茫人海间的芸芸众生。\n总会有地上的生灵，敢于直面雷霆的威光。\n我们只是平凡，但绝不平庸。",
        Button: "作品集"
    },

    About: {
        Title: "个人简介",
        Subtitle:"详细名称可查看英文版网页",
        Education: {
            Title:"教育背景",
            School1:"多伦多大学 - 加拿大，多伦多",
            Edu1:"本科",
            Description1:"学校排名：全球21位，加拿大1位\nGPA：(3.54/4.0)\n计算机科学&管理学 - 专业淘汰率(75%)\n学位：荣誉理学士 - 高度荣誉",
            School2:"温斯顿丘吉尔 - 加拿大，温哥华",
            Edu2:"高中",
            Description2:"曾代表学校参加不列颠哥伦比亚大学物理奥运大赛\n创立Python社团并拥有20位学生"

        },
        WorkExp: {
            Title:"工作经历",
            Job1:"深圳广播电影电视集团华夏城视 - 中国，深圳",
            Type:"实习",
            Description1:"前端开发：Vue, React的架构了解与使用。"
        },
    },

    Portfolio: {
        Title: "作品集",
        SubTitle: "代码不会欺骗，但有时注释会。",
        Demo: "演示",
        Code: "代码",
        Framework: "框架",
        Position: "职责",
        Project1: {
            ProjectTitle: "TB DEV个人主页",
            ProjectFramework: "React JS, tailwind CSS",
            PositionDescription:"前端开发，个人开发",
            ProjectDescription: "\"我们只是平凡，但绝不平庸\"\n 来自深圳湾公园地铁D出口的墙面广告，甚是喜欢。",
            Date: "2023.08 - Now",
        },
        Project2: {
            ProjectTitle: "The BC HUB",
            ProjectFramework: "React Bootstrap, MERN Stack",
            PositionDescription:"前端开发，团队管理",
            ProjectDescription: "The BC(区块链) HUB，让每个人都能了解和使用加密货币。学习交流，新闻获取，货币趋势，社区分享。",
            Date: "2022.01 - 2022.05 ",
        },
        Project3: {
            ProjectTitle: "社团管理APP",
            ProjectFramework: "Flutter, Google Firebase",
            PositionDescription:"移动开发，前后端开发，数据库管理",
            ProjectDescription: "UTM的华人社团管理APP，为效率管理而生，因运维人力而卒。后来明白，不是管理没效率，而是干部不执行。",
            Date: "2022.08 - 2023.01 ",
        },
        Project4: {
            ProjectTitle: "Arduino遥控车",
            ProjectFramework: "Arduino, Uno, Motor, Radio Control",
            PositionDescription:"遥控软件开发, 硬件设计组装",
            ProjectDescription: "",
            Date: "2022.06 - 2022.08 ",
        },
    },

    Experience: {
        Title: "开发经验",
        SubTitle: "宇宙的尽头，就是去码头整点薯条。"
    },

    Contact: {
        Title: "共鸣",
        SubTitle: "你好，世界。",
        Form: {
            NameField: "你的名字",
            EmailField: "电子邮箱",
            Submit: "传达"
        },
    },

    SocialLinks: {
        WeChat: "微信",
        Github: "Github",
        Mail:"邮箱",
        Resume:"简历",
    }
        
    
}

export type RequiredLocaleType = typeof cn;
export default cn;