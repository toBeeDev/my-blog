import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import logoAnimaginary from "@/img/logos/animaginary.svg";
import logoCosmos from "@/img/logos/cosmos.svg";
import logoHelioStream from "@/img/logos/helio-stream.svg";
import logoOpenShuttle from "@/img/logos/open-shuttle.svg";
import { type Metadata } from "next";
import { Card } from "@/components/Card";
import Image from "next/image";
import { GoLink } from "react-icons/go";
import EmptyContent from "@/components/EmptyContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I’ve made trying to put my dent in the universe.",
};

const ProjectPage = () => {
  const projects = [
    {
      name: "Animaginary",
      description:
        "High performance web animation library, hand-written in optimized WASM.",
      link: { href: "#", label: "github.com" },
      logo: logoAnimaginary,
    },
    // {
    //   name: "HelioStream",
    //   description:
    //     "Real-time video streaming library, optimized for interstellar transmission.",
    //   link: { href: "#", label: "github.com" },
    //   logo: logoHelioStream,
    // },
    // {
    //   name: "cosmOS",
    //   description:
    //     "The operating system that powers our Planetaria space shuttles.",
    //   link: { href: "#", label: "github.com" },
    //   logo: logoCosmos,
    // },
    // {
    //   name: "OpenShuttle",
    //   description:
    //     "The schematics for the first rocket I designed that successfully made it to orbit.",
    //   link: { href: "#", label: "github.com" },
    //   logo: logoOpenShuttle,
    // },
  ];
  return (
    <SimpleLayout
      title="Creative Code Canvas"
      intro="코드로 캔버스를 채우다. 다채로운 프로젝트와 혁신적인 웹 경험을 통해 제 개발 여정을 소개합니다. 기술의 힘으로 사용자와 상호작용하는 멋진 세계를 만들어 나가는 과정을 함께하세요"
    >
      <EmptyContent />
      {/* <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt="logo"
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-100">
              <GoLink className="text-lg flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul> */}
    </SimpleLayout>
  );
};

export default ProjectPage;
