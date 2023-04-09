
export interface SiteConfig {
    // 你将要部署到的站点地址
    origin: string,
    // 站点图标链接
    favicon: string,
    // 站点名称
    name: string,
    // 站点标语
    slogan: string,
    // 站点描述
    description: string,
    // 站点关键词
    keywords: string,
    // 站点作者
    author: string
}

// 顶部菜单：仅支持二级菜单
export interface MenuItem {
    name: string,
    children: {
        name: string,
        href: string
    }[]
}

// 默认资源信息
export interface DefaultAssets {
    cover: string
}

export interface FooterConfig {
    // 备案号
    beian: {
        enabled: boolean,
        value: string
    },
    // 底部标语
    slogan: string,
    // 底部链接
    links: {
        href: string,
        icon: string,
        title: string
    }[]
}

// 轮播图配置
export interface PostSliderConfig {
    limit: number
}

// memory配置
export interface MemoriesConfig {
    // 在memories页面显示的最大数量
    show_limit: number,
    // 在首页显示的最大数量
    recent_limit: number
}

// twikoo评论配置
// twikoo => https://twikoo.js.org/
export interface TwikooConfig {
    // 是否启用twikoo评论
    enabled: boolean,
    // twikoo的url
    url: string,
    // 在首页显示的最大数量
    recent_limit: number,
    // 你的留言板页面，向用户呈现的时候引导用户去留言
    board_url: string
}

export interface HeadingConfig {
    // 文章标题目录深度（1-6）
    depth: number
}


// 主题配置
// 此配置只做选项与默认项，具体配置会读取用户浏览器的LocalStorage数据
export interface ThemeConfig {
    // 主题色
    main_colors: string[],
    // 大圆角
    large_border_radius: {
        default: boolean
    },
    // 亮度
    brightness: {
        default: number,
        min: number,
        max: number,
        step: number
    },
    // 固定头部
    headerFixed: {
        default: boolean
    },
    // 背景图
    imageBackground: {
        default: boolean,
        url: string,
        // 继承：例如在文章页面，背景会继承文章封面图
        inherit: boolean
    },
    // 白色卡片
    whiteCard: {
        default: boolean,
    }
}


export interface IakConfig {
    site: SiteConfig,
    menus: MenuItem[],
    defaultAssets: DefaultAssets,
    footer: FooterConfig,
    postSlider: PostSliderConfig,
    memories: MemoriesConfig,
    twikoo: TwikooConfig,
    heading: HeadingConfig,
    theme: ThemeConfig
}