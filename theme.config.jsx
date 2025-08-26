export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{new Date().getFullYear()}</time> © Forge笔记
    </small>
  ),
  dateFormatter: (date) => new Date(date).toISOString().split('T')[0],
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: '阅读更多 →',
  postFooter: null,
  darkMode: true,
  navs: [
    {
      url: '/projects',
      name: '🚀 开源项目'
    },
    {
      url: '/resources',
      name: '📚 资料分享'
    },
    {
      url: 'https://github.com/nemoob',
      name: '💻 GitHub'
    }
  ]
}