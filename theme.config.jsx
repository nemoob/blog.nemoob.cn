import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const config = {
  // 网站基本信息
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Forge笔记</span>
    </div>
  ),
  
  // 项目链接
  project: {
    link: 'https://github.com/nemoob/blog.nemoob.cn',
  },
  
  // 文档搜索
  search: {
    placeholder: '搜索文档...',
  },
  
  // 中文本地化
  i18n: [
    { locale: 'zh-CN', text: '中文' }
  ],
  
  // 页脚
  footer: {
    text: (
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <span>© 2024 杨杨杨大侠. All rights reserved.</span>
      </div>
    )
  },
  
  // 头部配置
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = 'https://blog.nemoob.cn' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Forge笔记'} />
        <meta property="og:description" content={frontMatter.description || '杨杨杨大侠的技术博客'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </>
    );
  },
  
  // 使用深色主题
  darkMode: true,
  
  // 下一页/上一页
  navigation: {
    prev: true,
    next: true
  },
  
  // 目录
  toc: {
    backToTop: true,
    title: '本页目录'
  },
  
  // 编辑链接 - 已禁用
  editLink: {
    text: null
  },
  
  // 反馈链接 - 已禁用
  feedback: {
    content: null
  },
  
  // 更多中文文本
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Forge笔记'
    }
  },
  
  // 404页面
  notFound: {
    content: '提交问题',
    labels: 'bug'
  },
  
  // 侧边栏
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  
  // 中文文本配置
  themeSwitch: {
    useOptions: () => ({
      light: '浅色',
      dark: '深色',
      system: '系统'
    })
  },
  
  // 更多中文文本
  gitTimestamp: ({ timestamp }) => (
    <div>最后更新于 {timestamp.toLocaleDateString('zh-CN')}</div>
  ),
  
  // 导航文本
  navigation: {
    prev: true,
    next: true
  },
  
  // 其他文本
  banner: {
    dismissible: true,
    key: 'nextra-banner'
  }
};

export default config;