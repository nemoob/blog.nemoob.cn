const fs = require('fs');
const path = require('path');

function generatePostsMeta() {
  const postsDir = path.join(process.cwd(), 'pages/posts');
  
  // 检查posts目录是否存在
  if (!fs.existsSync(postsDir)) {
    console.log('Posts directory not found, skipping meta generation.');
    return;
  }
  
  // 读取所有MDX文件
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.mdx') && file !== 'index.mdx');
  
  if (files.length === 0) {
    console.log('No MDX files found in posts directory.');
    return;
  }
  
  const posts = [];
  
  files.forEach(file => {
    try {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // 简单的Front Matter解析
      let title = file.replace('.mdx', '');
      let date = new Date().toISOString();
      
      // 尝试从文件内容中提取标题和日期
      const frontMatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
      if (frontMatterMatch) {
        const frontMatter = frontMatterMatch[1];
        const titleMatch = frontMatter.match(/title:\s*["']?([^"'\n]+)["']?/);
        const dateMatch = frontMatter.match(/date:\s*["']?([^"'\n]+)["']?/);
        
        if (titleMatch) title = titleMatch[1].trim();
        if (dateMatch) date = dateMatch[1].trim();
      } else {
        // 如果没有Front Matter，尝试从第一个标题提取
        const titleMatch = content.match(/^#\s+(.+)$/m);
        if (titleMatch) {
          title = titleMatch[1].trim();
        }
      }
      
      posts.push({
        filename: file.replace('.mdx', ''),
        title: title,
        date: date
      });
      
    } catch (error) {
      console.warn(`Error processing file ${file}:`, error.message);
    }
  });
  
  // 按日期排序（最新的在前）
  posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  
  // 生成_meta.json
  const meta = {};
  posts.forEach(post => {
    meta[post.filename] = post.title;
  });
  
  // 写入_meta.json文件
  const metaPath = path.join(postsDir, '_meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  
  console.log(`✅ Generated _meta.json with ${posts.length} posts:`);
  posts.forEach(post => {
    console.log(`   - ${post.title} (${post.filename})`);
  });
}

// 执行生成
try {
  generatePostsMeta();
} catch (error) {
  console.error('❌ Error generating meta:', error.message);
  process.exit(1);
}