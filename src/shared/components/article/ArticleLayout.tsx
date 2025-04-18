"use client";
import React, { useContext } from "react";
import { ArticleWithSlug } from "@/lib/article";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/formateDate";
import { AppContext } from "@/app/provider";
import Container from "@/shared/components/layout/Container";
import { Prose } from "@/shared/components/article/Prose";
import Icons from "@/shared/Icons";

const ArticleLayout = ({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) => {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);
  return (
    <Container className="w-full">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to posts"
                className="group mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
              >
                <Icons.LeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-black dark:text-zinc-100">
                {article.title}
              </h1>

              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <Prose
              className="mt-4 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
              data-mdx-content
            >
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
};

export default ArticleLayout;
