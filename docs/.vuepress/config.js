module.exports = {
    title: 'HelloAdmin',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
      ],
      themeConfig : {
        nav : [ // 添加导航栏
            { text: '关于我们', link: '/apiword' },
            { text: 'GitHub', link: '/api' },
            // { text: '菜单3', link: '/error' },
            // {text: '菜单4',
            //     items:[
            //         {text:'菜单4-1',link: '/ers1'},
            //         {text:'菜单4-2',link: '/ers2'},
            //     ]
            // }
        ],
        // 添加侧边栏
        sidebar: 'auto',
        sidebarDepth: 2,
        globalLayout: 'layouts/GlobalLayout.vue',
        main: 'layouts/Layout.vue',
    }
  }