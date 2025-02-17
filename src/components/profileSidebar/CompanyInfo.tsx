import Image, { type ImageProps } from "next/image";

interface CompanyInfo {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

const CompanyInfo = ({ companyInfo }: { companyInfo: CompanyInfo }) => {
  let startLabel =
    typeof companyInfo.start === "string"
      ? companyInfo.start
      : companyInfo.start.label;
  let startDate =
    typeof companyInfo.start === "string"
      ? companyInfo.start
      : companyInfo.start.dateTime;

  let endLabel =
    typeof companyInfo.end === "string"
      ? companyInfo.end
      : companyInfo.end.label;
  let endDate =
    typeof companyInfo.end === "string"
      ? companyInfo.end
      : companyInfo.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex w-10 h-10 flex-none items-center justify-center rounded-full shadow-md shadow-sky-800/5 ring-1 ring-red-900/5 dark:border dark:border-sky-700/50 dark:ring-0">
        <Image
          src={companyInfo.logo}
          alt="companyInfoImage"
          className="h-full w-full rounded-full"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-sky-900 dark:text-sky-100">
          {companyInfo.company}
        </dd>
        <dt className="sr-only">CompanyInfo</dt>
        <dd className="text-xs text-sky-500 dark:text-sky-400">
          {companyInfo.title}
        </dd>
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

export default CompanyInfo;
