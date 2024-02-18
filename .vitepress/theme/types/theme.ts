/*
 * @Date: 2024-02-18 13:33:28
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-19 01:15:42
 * @FilePath: /vuepress-interview/.vitepress/theme/types/theme.ts
 */
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
        items: Array<NavItem>,

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
        items: Article[]
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

interface NavItems {
    items: NavItem[]
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

interface Article {
    [key: string]: any
}