const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true
});

module.exports = withNextra({
  // 国际化配置
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN'
  },
  
  // 图片优化
  images: {
    domains: ['images.unsplash.com', 'github.com']
  }
})