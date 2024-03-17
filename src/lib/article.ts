import glob from "fast-glob";

export interface ArticleWithSlug extends Article {
  slug: string;
}

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
}

export async function importArticle(
  articleFilename: string
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/posts/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
    ...article,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/posts",
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
