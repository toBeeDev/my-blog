import { Card } from "@/components/Card";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProfileSidebar from "@/components/profileSidebar";
import { ArticleWithSlug, getAllArticles } from "@/lib/article";
import { formatDate } from "@/lib/formateDate";

const Article = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <Card as="article">
      <Card.Title href={`/posts/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow>{formatDate(article.date)}</Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>자세히 보기</Card.Cta>
    </Card>
  );
};

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);
  return (
    <main>
      <Hero />
      <Container className="mt-10 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <ProfileSidebar />
        </div>
      </Container>
    </main>
  );
}
