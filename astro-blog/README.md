# SimonChen Astro Blog

现有 Hexo 博客的独立 Astro 迁移版本。不会读取或修改父目录中的 Hexo 构建文件。

```bash
npm install
npm run dev
npm run build
```

文章由 `src/content/posts/` 管理，frontmatter 通过 Content Collections 校验。`legacyPath` 用于保持原 Hexo URL。
