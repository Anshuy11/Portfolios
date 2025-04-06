import React from "react";

import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  const projectsData = [
    {
      projectName: "Shoforce",
      image: [
        { image: "card-images/shoforce1.png", altTag: "Shoforce" },
        { image: "card-images/shoforce2.png", altTag: "Shoforce" },
        { image: "card-images/shoforce3.png", altTag: "Shoforce" },
      
      ],
      description:
        "Efficiently manage employee data and monitor workforce activities through a comprehensive SaaS platform.Enable real-time tracking, streamlined data management, and actionable insights for optimized workforce performance.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "Google Location API",
  
        "Tailwind css ",
        "html/css",
        "DOM Manipulation",
      
        "Git & Github",
        "Context API",
      ],
      url: "https://shoforce.emships.com/",
    },
    {
      projectName: "Education Times",
      image: [
        { image: "card-images/et.png", altTag: "Education Times" },
        { image: "card-images/et2.png", altTag: "Education Times" },
        { image: "card-images/et3.png", altTag: "Education Times" },
        { image: "card-images/et4.png", altTag: "Education Times" },
        { image: "card-images/et5.png", altTag: "Education Times" },
      ],
      description:
        "A comprehensive career guidance platform for students featuring dedicated sections for counselors, placement reports, colleges, study abroad opportunities, informative articles, web stories, and a dynamic Q&A forum.Designed to empower students with personalized insights and resources for informed career decisions.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "React.js",
        "Tailwind css ",
        "html/css",
        "DOM Manipulation",
        "Redux",
        "Git & Github",
        "Next Outh",
      ],
      url: "https://www.educationtimes.com/",
    },
    {
      projectName: "Times Ascent",
      image: [
        { image: "card-images/ta.png", altTag: "Times Ascent" },
        { image: "card-images/ta2.png", altTag: "Times Ascent" },
        { image: "card-images/ta3.png", altTag: "Times Ascent" },
        { image: "card-images/ta4.png", altTag: "Times Ascent" },
        { image: "card-images/ta5.png", altTag: "Times Ascent" },
      ],
      description:
        "A dedicated platform focused on providing job opportunities and career information specific to Lucknow, complemented by engaging content through podcasts, web stories, and informative articles.Designed to support local job seekers with relevant updates, insights, and guidance for career growth.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "React.js",
        "Tailwind css ",
        "html/css",
        "DOM Manipulation",

        "Git & Github",
      ],
      url: "https://timesascent.com/",
    },
    {
      projectName: "Education Times Admin Panel",
      image: [
        {
          image: "card-images/etAdmin.png",
          altTag: "Education Times Admin Panel",
        },
        {
          image: "card-images/etAdmin1.png",
          altTag: "Education Times Admin Panel",
        },
        {
          image: "card-images/etAdmin2.png",
          altTag: "Education Times Admin Panel",
        },
        {
          image: "card-images/etAdmin3.png",
          altTag: "Education Times Admin Panel",
        },
      ],
      description:
        "Dynamically managed all content and data for EducationTimes, a CMS-driven application designed to streamline content creation, editing, and publishing processes.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "React.js",
        "Tailwind css ",
        "html/css",
        "Git & Github"
      ],
      url: "https://etadmin.onecorp.co.in/",
    },
    {
      projectName: "Times Ascent Admin Panel ",
      image: [
        {
          image: "card-images/taAdmin.png",
          altTag: "Times Ascent Admin Panel ",
        },
        {
          image: "card-images/taAdmin1.png",
          altTag: "Times Ascent Admin Panel ",
        },
        {
          image: "card-images/taAdmin2.png",
          altTag: "Times Ascent Admin Panel ",
        },
        {
          image: "card-images/taAdmin3.png",
          altTag: "Times Ascent Admin Panel ",
        },
      ],
      description:
        "Efficiently managed and maintained dynamic data for TimesAscent, a CMS-based application focused on seamless content management and publishing workflows.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "React.js",
        "Tailwind css ",
        "html/css",
      ],
      url: "https://timesbi.onecorp.co.in/",
    },
  ];
  return (
    <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 sm:my-6">
      {projectsData?.map((data, key) => (
        <PortfolioCard key={key} data={data} />
      ))}
    </div>
  );
};

export default PortfolioSection;
