module.exports = {
    title: 'AnDorN0T',
    description: '试试冰冷昂贵如云涉水的轻身术',
    lang: 'zh-CN',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'igaozp',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',

        algolia: {
            appId: '8V1TCORD7W',
            apiKey: 'b926f4544455aaa1d40622dff9d1610f',
            indexName: 'blog'
        },

        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '归档',
                link: '/archive',
                activeMatch: '^/config/'
            },
            {
                text: '计算机不完全漫游指南',
                link: 'https://okcomputer.wiki'
            },
        ],

        sidebar: {
            '/guide/': getGuideSidebar(),
            '/config/': getConfigSidebar(),
            '/': getGuideSidebar()
        }
    }
}

function getGuideSidebar() {
    return [
        {
            text: 'Introduction',
            children: [
                { text: 'What is VitePress?', link: '/' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Configuration', link: '/guide/configuration' },
                { text: 'Asset Handling', link: '/guide/assets' },
                { text: 'Markdown Extensions', link: '/guide/markdown' },
                { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
                { text: 'Deploying', link: '/guide/deploy' }
            ]
        },
        {
            text: 'Advanced',
            children: [
                { text: 'Frontmatter', link: '/guide/frontmatter' },
                { text: 'Theming', link: '/guide/theming' },
                { text: 'API Reference', link: '/guide/api' },
                {
                    text: 'Differences from Vuepress',
                    link: '/guide/differences-from-vuepress'
                }
            ]
        }
    ]
}

function getConfigSidebar() {
    return [
        {
            text: 'App Config',
            children: [{ text: 'Basics', link: '/config/basics' }]
        },
        {
            text: 'Theme Config',
            children: [
                { text: 'Homepage', link: '/config/homepage' },
                { text: 'Algolia Search', link: '/config/algolia-search' },
                { text: 'Carbon Ads', link: '/config/carbon-ads' }
            ]
        }
    ]
}
