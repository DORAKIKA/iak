// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// 站点信息
export const site = {
    // 站点图标链接
    favicon: '/favicon.svg',
    // 站点名称
    name: 'IAK',
    // 站点描述
    description: '一个基于Astro搭建的简单博客',
    // 站点作者
    author: 'DORAKIKA'
}
// 顶部菜单：仅支持二级菜单
export const menus = [
    {
        name: '时',
        children: [
            {name: '文章归档', href: '/posts'},
            // {name: '与昨日书', href: '/memos'}
        ]
    },{
        name: '空',
        children: [
            {name: '友情链接', href: '/friends'}
        ]
    }
]

export const default_cover = "https://img.dorakika.cn/md/default.png"

// 页脚信息
export const footer = {
    beian: {
        enabled: true,
        value: "皖ICP备2022003488号"
    },
    slogan: "这里是一个简简单单的博客示例 - qaq",
    links: [
        {
            href: 'https://dorakika.cn',
            icon: '<img src="/images/dorakika.png" class="icon" />',
            title: 'DORAKIKA'
        },
        {
            href: 'https://github.com/dorakika/iak',
            icon: '<svg t="1670852782966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" width="32" height="32"><path d="M0 524.992q0 166.016 95.488 298.496t247.488 185.504q6.016 0.992 10.016 0.992t6.496-1.504 4-3.008 2.016-4.992 0.512-4.992v-100.512q-36.992 4-66.016-0.512t-45.504-14.016-28.992-23.488-16.992-25.504-8.992-24-5.504-14.496q-8.992-15.008-27.008-27.488t-27.008-20-2.016-14.496q50.016-26.016 112.992 66.016 34.016 51.008 119.008 30.016 10.016-40.992 40-70.016Q293.984 736 237.984 670.976t-56-158.016q0-87.008 55.008-151.008-22.016-64.992 6.016-136.992 28.992-2.016 64.992 11.488t50.496 23.008 25.504 17.504q56.992-16 128.512-16t129.504 16q12.992-8.992 28.992-19.008t48.992-21.504 60.992-9.504q27.008 71.008 7.008 135.008 56 64 56 151.008 0 92.992-56.992 158.496t-172 85.504q43.008 43.008 43.008 104v128.992q0 0.992 0.992 3.008 0 6.016 0.512 8.992t4.512 6.016 12 3.008q152.992-52 250.496-185.504t97.504-300.512q0-104-40.512-199.008t-108.992-163.488-163.488-108.992T512.032 12.96 313.024 53.472 149.536 162.464t-108.992 163.488-40.512 199.008z" p-id="2657"></path></svg>',
            title: 'Github'
        },{
            href: 'mailto:dorakika@163.com',
            icon: '<svg t="1670853960118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1440" width="32" height="32"><path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l64 54.250667V746.666667h597.333334V429.44l64-54.250667zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z m-9.6 64h-578.133334L512 523.882667 801.066667 277.333333z" p-id="1441"></path></svg>',
            title: 'Mail'
        },
    ]
}


// twikoo => https://twikoo.js.org/
export const twikoo = {
    enabled: false,
    url: "your.twikoo.url"
}

// 文章标题目录深度（1-6）
export const headings_depth = 3

// 主题配置
export const theme = {
    main_colors: ['50, 201, 235','244,149,162', '144, 83, 144', '52, 175, 86', '47, 50, 55'],
    border_radius: ['8px', '16px'],
    brightness: {
        default: 1,
        min: 0.5,
        max: 1.1,
        step: 0.1
    }
}