import SimpleLayout from "@/shared/components/layout/SimpleLayout";
import React from "react";
import blogLogo from "@/img/logos/dark.svg";
import { type Metadata } from "next";
import { Card } from "@/shared/components/common/Card";
import Image from "next/image";
import { GoLink } from "react-icons/go";

export const metadata: Metadata = {
  title: "Projects",
  description: "프론트엔드 개발자로서의 여정을 담아내는 BEE의 블로그",
};

const ProjectPage = () => {
  const projects = [
    {
      name: "B.log",
      description: "프론트엔드 개발자로서의 여정을 담아내는 BEE의 블로그",
      link: {
        href: "https://github.com/toBeeDev/my-blog",
        label: "B.log",
      },
      logo: blogLogo,
      stack: ["Next.js", "tailwindcss", "TypeScript"],
    },
    {
      name: "KiKi",
      description: "Socket.io 기반의 실시간 채팅 웹앱",
      link: { href: "https://github.com/toBeeDev/chat-app", label: "KiKi" },
      logo: "https://img.icons8.com/flat-round/50/filled-chat.png",
      stack: ["React", "Socket.io", "JavaScript"],
    },
  ];
  return (
    <SimpleLayout
      title="Project Canvas"
      intro="제가 만든 프로젝트들을 한눈에 볼 수 있는 공간입니다. 창의적인 아이디어와 최신 기술을 활용해 개발한 작업물들을 만나보세요!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt="logo"
                width={32}
                height={32}
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-sky-800 dark:text-sky-100">
              <Card.Link target="blank" href={project.link.href}>
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {project.stack && (
              <div className="mt-4 flex flex-wrap gap-2 static z-10">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-sky-100  dark:bg-sky-800/40 dark:text-sky-100 text-sky-800 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-sky-400 transition group-hover:text-sky-500 dark:text-sky-100">
              <GoLink className="text-lg flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default ProjectPage;
