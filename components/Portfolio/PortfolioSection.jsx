import React from "react";

import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  const projectsData = [
    
    {
      projectName: "ShopNow",
      image: [
        { image: "card-images/shopNow1.png", altTag: "shopNow" },
        { image: "card-images/shopNow2.png", altTag: "shopNow" },
        { image: "card-images/shopNow3.png", altTag: "shopNow" },
        { image: "card-images/shopNow4.png", altTag: "shopNow" },
        { image: "card-images/shopNow5.png", altTag: "shopNow" },
      
      ],
      description:
        "Single-handedly built a responsive e-commerce app with auth, Razorpay, Redux cart, theme toggle, search debouncing, and Vercel deployment.",
      technologiesUsed: [
        "Next.js",
        "react",
        "Javascript",
        "Nodejs",
        "MongoDB",
        "Razorpay",
        "LocalStorage",
        "SessionStorage",
  
        "Tailwind css ",
        "html/css",
        "Redux",
      
        "Git & Github",
        "Context API",
      ],
      url: "https://shop-now-chi.vercel.app/",
    },
      {
      projectName: "Shoforce",
      image: [
        { image: "card-images/shoforce1.png", altTag: "Shoforce" },
        { image: "card-images/shoforce2.png", altTag: "Shoforce" },
        { image: "card-images/shoforce3.png", altTag: "Shoforce" },
      
      ],
      description:
        "Built an efficient admin panel for a SaaS platform to manage employee data and monitor workforce activities with real-time tracking, streamlined data handling, and actionable insights.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "Google Location API",
  
        "Tailwind css ",
        "html/css",
        "DOM Manipulation",
      "SessionStorage",
        "Git & Github",
        "Context API",
      ],
      url: "#",
    },
    {
      projectName: "Education Times",
      image: [
        { image: "card-images/et.png", altTag: "Education Times" },
        { image: "card-images/et2.png", altTag: "Education Times" },
        { image: "card-images/et3.png", altTag: "Education Times" },
        { image: "card-images/et4.png", altTag: "Education Times" },
        { image: "card-images/et5.png", altTag: "Education Times" },
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
       
      ],
      description:
        "Built a comprehensive career guidance platform with sections for counselors, placements, colleges, study abroad, articles, web stories, and Q&A. Also developed a dynamic admin panel to manage all content efficiently.",
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
         {
          image: "card-images/etAdmin.png",
          altTag: "Education Times Admin Panel",
        },
        {
          image: "card-images/etAdmin1.png",
          altTag: "Education Times Admin Panel",
        },
      
        {
          image: "card-images/etAdmin3.png",
          altTag: "Education Times Admin Panel",
        },
      ],
      description:
        "Developed a Lucknow-focused job platform with podcasts, web stories, and articles to support local job seekers. Also built an admin panel for content and job listing management.",
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
