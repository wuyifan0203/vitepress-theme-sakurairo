export interface Theme {
    global: {
        background?: {
            src: () => string,
            color?: string
        },
        font?: {
            src: () => string,
            family?: () => string,
            size?: string;
            weight?: string;
        },
        board?: {
            showIcon: boolean,
            titleAlign: 'left' | 'center' | 'right',
        },
        logo?: string,
        avatar: string,
        author: string,
    },
    nav: {
        style: 'sakura' | 'sakurairo',
        items: Array<NavItem | NavItems>,

    },
    cover: {
        background?: {
            src: () => string,
            color?: string
        },
        title?: string,
        description?: string,
        typed?: {
            strings: string[]
        },
        socialLinks: SocialLink[],
        wave?: {
            enable: boolean,
        }
    },
    noticeBoard: {
        enable: boolean,
        background: {
            src: () => string,
            color?: string
        },
        text: {
            content: string,
            align: 'left' | 'center' | 'right',
            color: string
        }
    },
    displayBoard?: {
        enable: boolean,
        icon?: string,
        title?: string,
        items: [DisplayBlock, DisplayBlock, DisplayBlock]
    },
    articleBoard: {
        title?: string,
        icon?: string,
        layout?: 'left' | 'right' | 'interlaced',
    },
    footer: {
        copyright?: string,
        record?: string
    }


}

interface NavItem {
    text: string,
    link: string,
    icon?: string
}

export interface NavItems {
    items: NavItem[]
    link: string,
    text: string,
    icon?: string
}

interface SocialLink {
    icon: SocialLinkIcon,
    link: string
}

type SocialLinkIcon = 'bilibili' | 'csdn' | 'dingding' | 'discord' | 'douban' | 'email' | 'douyin' | 'facebook' | 'github' | 'gitee' | 'instagram' | 'jianshu' | 'juejin' | 'kuaishou' | 'line' | 'linkedin' | 'lofter' | 'neteastcloud' | 'qq' | 'skype' | 'steam' | 'telegram' | 'twitter' | 'vk' | 'wechat' | 'weibo' | 'youtube' | 'zhihu';

interface DisplayBlock {
    title: string,
    description: string,
    link: string,
    background: {
        src: () => string,
        color?: string
    }
}

// TODO：零时写法
export interface Article {
    [key: string]: any
}