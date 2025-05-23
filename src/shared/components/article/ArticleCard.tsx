import { formatDate } from "@/lib/formateDate";
import { Card } from "@/shared/components/common/Card";
import { ArticleWithSlug } from "@/lib/article";

const ArticleCard = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <Card as="article">
      <Card.Title href={`/posts/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow>{formatDate(article.date)}</Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Tags tags={article.tags} />
      <Card.Cta>자세히 보기</Card.Cta>
    </Card>
  );
};

export default ArticleCard;
