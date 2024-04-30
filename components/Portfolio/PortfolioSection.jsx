import React from "react";

import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  const projectsData = [
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
        " As a frontend developer I developed responsive and accessible user interfaces. Integrated third-party APIs to enhance website functionality and user experience. Implemented user authentication and authorization mechanisms, including nextAuth.js, for secure access to web applications. Use AMP Tag to create high-performance, mobile-friendly dynamic web-stories.Enhance the website's performance to achieve a minimum score of 75+ for mobile devices and 95+ for desktop .Utilize distinct schema for both list and detail pages across the website.Worked closely with UI/UX designers to translate design mockups and wireframes into functional web pages.Collaborated with back-end developers to design and consume RESTful APIs for seamless data integration.Conducted code reviews and provided technical guidance to team members to ensure high code quality and adherence to best practices. Debug the code to uphold the website's performance and functionality.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "React.js",
        "Tailwind css ",
        "html/css",
        "DOM Manipulation",
        "Redux",
        "git",
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
        "During my tenure as a frontend developer at Times Ascent, I played a pivotal role in enhancing various sections of the website while also undertaking the responsibility of its maintenance. Specifically, I spearheaded initiatives within the Webstory section, contributing to its development, validation, and optimization processes. In addition to ensuring the technical robustness and accuracy of Webstory content, I diligently focused on improving the overall performance metrics of the website. My efforts encompassed a comprehensive approach, involving code optimization, resource management, and the implementation of best practices to enhance user experience and site responsiveness. Through these multifaceted endeavors, I endeavored to uphold the high standards of quality and functionality expected within the digital realm, thereby contributing significantly to the success and efficacy of the Times Ascent online platform.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "React.js",
        "Tailwind css ",
        "html/css",
        "DOM Manipulation",

        "git",
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
        "Designed and developed many sections of admin panel for educationTimes for efficient management of content and data  entries, implementing CRUD (Create, Update, Delete) operations . ",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "React.js",
        "Tailwind css ",
        "html/css",
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
        "Designed and developed many  sections of admin panel for timesAscent for efficient management of content and data entries, implementing CRUD(Create, Update, Delete) ",
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
