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
        <Card.Cta>자세히 보기</Card.Cta>
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
      intro="제가 개발하며 배우고 경험한 것들을 기록한 공간입니다. 프로젝트에서 마주한 고민, 해결 과정, 그리고 얻은 인사이트를 정리한 공간입니다."
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
