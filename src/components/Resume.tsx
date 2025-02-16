import React from "react";
import socar from "@/img/logos/socar.png";
import Image, { type ImageProps } from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { Button } from "./Button";

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

const Role = ({ role }: { role: Role }) => {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex w-10 h-10 flex-none items-center justify-center rounded-full shadow-md shadow-sky-800/5 ring-1 ring-red-900/5 dark:border dark:border-sky-700/50 dark:ring-0">
        <Image
          src={role.logo}
          alt="roleImage"
          className="h-full w-full rounded-full"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-sky-900 dark:text-sky-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-sky-500 dark:text-sky-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-sky-400 dark:text-sky-500">
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">-</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
};

const Resume = () => {
  let resume: Array<Role> = [
    {
      company: "SOCAR",
      title: "Frontend Developer",
      logo: socar,
      start: "2022",
      end: {
        label: "현재",
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ];
  return (
    <div className="rounded-2xl border border-sky-200 p-6 dark:border-sky-700/40">
      <h2 className="flex text-sm font-semibold text-sky-900 dark:text-sky-100">
        <FaBriefcase className="text-xl" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/이력서.pdf"
        variant="secondary"
        target="_blank"
        className="group mt-6 w-full"
      >
        이력서 보기 📂
      </Button>
    </div>
  );
};

export default Resume;
