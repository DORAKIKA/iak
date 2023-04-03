// 全局对象，方便管理
// 建议将不涉及dom操作的函数放在这里，涉及到dom操作的函数可放在相应的组件中
window.iak = {
    data: {
        // 文章列表
        posts: [],
        // 友链列表
        friends: [],
    },
    // 前往随机文章页面
    randomPage(){
        if(this.data.posts.length){
            const rand = Math.floor(Math.random() * this.data.posts.length);
            SnackBar({
                message: `随机文章为 <a href="${this.data.posts[rand].url}" target="_self">「${this.data.posts[rand].title}」</a>`,
                fixed: true,
                position: 'tc',
                timeout: 5000,
            })
        }
    },
    toggleDarkMode(flag){
        if(flag === undefined){
            document.documentElement.classList.toggle('dark');
        }else{
            if(flag){
                document.documentElement.classList.add('dark');
            }else{
                document.documentElement.classList.remove('dark');
            }
        }
        return document.documentElement.classList.contains('dark')
    },
    // 默认函数，若相应组件内绑定失败，则使用此函数
    togglePanel: defaultFunc('切换面板'),
    toggleSearch: defaultFunc('切换搜索'),
    toggleSidebar: defaultFunc('切换侧边栏'),
    toggleHeadings: defaultFunc('切换目录'),
}

window.addEventListener('DOMContentLoaded', function(){
    // fancybox
    Fancybox.bind("[data-fancybox]", {});
})
window.addEventListener('blur', () => {
    // 页面失去焦点，恢复初始状态
    iak.togglePanel.type !== 'default' && iak.togglePanel(false);
    iak.toggleSearch.type !== 'default' && iak.toggleSearch(false);
    iak.toggleSidebar.type !== 'default' && iak.toggleSidebar(false);
    iak.toggleHeadings.type !== 'default' && iak.toggleHeadings(false);
})

// 辅助函数
function defaultFunc(msg){
    const func = function(){
        if(SnackBar){
            SnackBar({
                message: msg,
                fixed: true,
            })
        }else{
            console.warn(msg)
        }
    }
    func.type = 'default';
    return func
}

// 取消全屏
function cancelFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }else{
        console.log('退出全屏失败')
    }
}