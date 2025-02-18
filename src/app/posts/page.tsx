import { getAllArticles } from "@/lib/article";
import ArticleClientPage from "@/components/posts/ArticlePage";

const ArticlePage = async () => {
  const articles = await getAllArticles();
  return <ArticleClientPage articles={articles} />;
};

export default ArticlePage;
