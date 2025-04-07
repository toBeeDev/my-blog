"use client";
import { ArticleWithSlug } from "@/lib/article";
import SimpleLayout from "@/shared/components/layout/SimpleLayout";
import { useCallback, useMemo, useState, useEffect } from "react";
import Article from "@/components/posts/Article";
import useDebounce from "@/hooks/useDebounce";
import EmptyContent from "@/shared/components/layout/EmptyContent";

const ArticlePage = ({ articles }: { articles: ArticleWithSlug[] }) => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (search.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  const filteredArticles = useMemo(() => {
    if (debouncedSearch.length === 0) {
      setIsSearching(false);
      return articles;
    }

    const result = articles.filter((article) =>
      article.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setIsSearching(false);
    return result;
  }, [articles, debouncedSearch]);

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
      <div className="flex pb-10 md:pb-20 w-full md:w-3/5">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={handleSearchChange}
          className="py-2 pl-2 w-3/5 pr-6 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
        />
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16 ">
          {isSearching ? (
            <EmptyContent text="검색중입니다..." />
          ) : filteredArticles.length === 0 && search.length > 0 ? (
            <EmptyContent text="검색 결과가 없습니다" />
          ) : (
            filteredArticles.map((article) => (
              <Article key={article.slug} article={article} />
            ))
          )}
        </div>
      </div>
    </SimpleLayout>
  );
};

export default ArticlePage;
