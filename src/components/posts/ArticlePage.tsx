"use client";
import { ArticleWithSlug } from "@/lib/article";
import SimpleLayout from "@/shared/components/layout/SimpleLayout";
import { useCallback, useMemo, useState } from "react";
import Article from "@/components/posts/Article";

const ArticlePage = ({ articles }: { articles: ArticleWithSlug[] }) => {
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [articles, search]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  return (
    <SimpleLayout
      title="Dev Diary"
      intro="제가 개발하며 배우고 경험한 것들을 기록한 공간입니다. 프로젝트에서 마주한 고민, 해결 과정, 그리고 얻은 인사이트를 정리한 공간입니다."
    >
      <div className="flex md:ml-6 justify-end max-w-[790px] mb-10 py-4">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={handleSearchChange}
          className="py-2 pl-2 pr-6 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
        />
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16 ">
          {filteredArticles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
};

export default ArticlePage;
