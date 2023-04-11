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

    say(str){
        if(SnackBar){
            SnackBar({
                message: str,
                fixed: true,
                position: 'tc',
            })
        }
    },
    // 向html的class设置主题
    setTheme(theme){
        document.documentElement.classList.add(theme);
    },
    // 退出全屏
    cancelFullscreen(){
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
    },
    welcome(){
        // 根据时间设置主题\欢迎语等等
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();

        // 欢迎语
        if(localStorage.getItem('welcome') !== `${year}-${month}-${day}}`){
            if(hour < 6){
                iak.say('夜深了，注意休息')
            }else if(hour < 9){
                iak.say('早上好')
            }else if(hour < 12){
                iak.say('上午好')
            }else if(hour < 14){
                iak.say('中午好')
            }else if(hour < 17){
                iak.say('下午好')
            }else if(hour < 19){
                iak.say('傍晚好')
            }else if(hour < 22){
                iak.say('晚上好')
            }else{
                iak.say('夜深了，注意休息')
            }
            localStorage.setItem('welcome', `${year}-${month}-${day}}`);
        }
        
        // 设置主题
        if(month === 4 && (day >= 4 && day <= 6)){
            // 清明节
            iak.setTheme('gray');
        }
    }
}


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

iak.welcome();
(function(){
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
})()




