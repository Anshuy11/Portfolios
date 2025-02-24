import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import Head from "next/head";

const Portfolio = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
  const projectsData = [
    {
      projectName: "Shoforce",
      image: [
        { image: "card-images/shoforce1.png", altTag: "Shoforce" },
        { image: "card-images/shoforce2.png", altTag: "Shoforce" },
        { image: "card-images/shoforce3.png", altTag: "Shoforce" },
      
      ],
      description:
        "I securely managed API tokens and user information using session storage, ensuring the protection of over 1000 user records. By engineering responsive and accessible user interfaces for diverse user types, I enhanced user engagement by 30%. Additionally, I optimized data access mechanisms, increasing user-specific query efficiency by 25% based on personalized requirements. My work on integrating the Google Location API significantly improved location-based features, while the development of dynamic and interactive data visualizations enhanced the experience for over 1000 SaaS users. Furthermore, I implemented a dual-theme website using the React Context API, allowing seamless light and dark mode toggling, which led to a 10% increase in user satisfaction.",
      technologiesUsed: [
        "Next.js",
        "Javascript",
        "Session Storage",
        "Restful API",
        "Debugging",
        "Google Location API",
  
        "Tailwind css ",
        "html/css",
        "DOM Manipulation",
      
        "git",
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
  <>
   <Head>
        <meta charSet="utf-8" />
        
        <title>
          {
            "Dynamic and solution-oriented Frontend Developer poised for new opportunities"
          }
        </title>
        <meta
          name="description"
          content={
            "Dynamic and solution-oriented Frontend Developer poised for new opportunities"
          }
        />
        <link rel="canonical" href="https://portfolios-dusky.vercel.app/portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon.ico"
        />
        <meta
          property="og:title"
          content={
            "Dynamic and solution-oriented Frontend Developer poised for new opportunities"
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            "Dynamic and solution-oriented Frontend Developer poised for new opportunities"
          }
        />
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="robots" content="NOODP" />
        <meta property="og:url" content="https://portfolios-dusky.vercel.app/portfolio" />
        <meta
          property="og:image"
          content="favicon.ico"
        />
     
       
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      
      </Head>
   <BannerLayout>
     <div className=" -z-10">
     <div className=" hidden sticky top-0 sm:flex bg-gradient-to-r from-[#102016] via-black to-[#102016] w-full z-50 p-3 text-white font text-lg gap-6 justify-evenly">
        {" "}
        <a href="/" className="cursor-pointer">
          Home
        </a>
        <a href="/contact" className="cursor-pointer">
          Contact
        </a>
        <a href="/background" className="cursor-pointer">
          Background
        </a>
        <a href="portfolio" className="cursor-pointer">
          Portfolio
        </a>
        <a
          href="/Anshu-YadavResume.pdf"
          target="_blank"
          className="cursor-pointer"
        >
          Resume
        </a>
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        {projectsData?.map((data, key) => (
          <PortfolioCard key={key} data={data} />
        ))}
      </div>
      </div>
      <Footer />
    </BannerLayout>
  </> 
  );
};

export default Portfolio;
