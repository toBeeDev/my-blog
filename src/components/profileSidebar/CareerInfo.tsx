import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { Button } from "@/components/Button";
import Company from "@/components/profileSidebar/Company";

const CareerInfo = () => {
  return (
    <aside className="rounded-2xl border border-sky-200 p-6 dark:border-sky-700/40">
      <h2 className="flex text-sm font-semibold text-sky-900 dark:text-sky-100">
        <FaBriefcase className="text-xl" />
        <span className="ml-3">Work</span>
      </h2>
      <Company />
      <Button
        href="/이력서.pdf"
        variant="secondary"
        target="_blank"
        className="group mt-6 w-full"
      >
        이력서 보기 📂
      </Button>
    </aside>
  );
};

export default CareerInfo;
