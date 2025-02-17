import Container from "@/shared/components/layout/Container";
import Hero from "@/components/Hero";
import ProfileSidebar from "@/components/profileSidebar";
import { getAllArticles } from "@/lib/article";
import ArticleCard from "@/shared/components/article/ArticleCard";

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);
  return (
    <main>
      <Hero />
      <Container className="mt-10 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <ProfileSidebar />
        </div>
      </Container>
    </main>
  );
}
