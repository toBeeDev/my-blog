import React from "react";
import socar from "@/img/logos/socar.png";
import CompanyInfo from "@/components/profileSidebar/CompanyInfo";

const Company = () => {
  let companyInfo: Array<CompanyInfo> = [
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
    <ol className="mt-6 space-y-4">
      {companyInfo.map((company, companyIndex) => (
        <CompanyInfo key={companyIndex} companyInfo={company} />
      ))}
    </ol>
  );
};

export default Company;
