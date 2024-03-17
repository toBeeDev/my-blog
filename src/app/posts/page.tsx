import { Card } from "@/components/Card";
import SimpleLayout from "@/components/SimpleLayout";
import { ArticleWithSlug, getAllArticles } from "@/lib/article";
import { formatDate } from "@/lib/formateDate";
import React from "react";

const Article = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
};

const ArticlePage = async () => {
  const articles = await getAllArticles();
  return (
    <SimpleLayout
      title="Dev Diary"
      intro="최신 기술 탐구부터 성능 최적화 비법까지, 프론트엔드 개발의 모든 것을 담은 나만의 학습 일지. 여러분의 개발 여정에 영감과 실질적인 도움을 주기 위해, 제 경험과 통찰을 공유합니다"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
};

export default ArticlePage;
