import React from "react";
import Badge from "./Badge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Image from "next/image";

const ProjectsCard = () => {
  const book = useRef();
  var settingsWeb = {
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
  };
  const projectsData = [
    {
      projectName: "ShopNow",
      image: [
        { image: "/card-images/shopNow1.png", altTag: "shopNow" },
        { image: "/card-images/shopNow2.png", altTag: "shopNow" },
        { image: "/card-images/shopNow3.png", altTag: "shopNow" },
        { image: "/card-images/shopNow4.png", altTag: "shopNow" },
        { image: "/card-images/shopNow5.png", altTag: "shopNow" },
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
        { image: "/card-images/shoforce1.png", altTag: "Shoforce" },
        { image: "/card-images/shoforce2.png", altTag: "Shoforce" },
        { image: "/card-images/shoforce3.png", altTag: "Shoforce" },
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
        { image: "/card-images/et.png", altTag: "Education Times" },
        { image: "/card-images/et2.png", altTag: "Education Times" },
        { image: "/card-images/et3.png", altTag: "Education Times" },
        { image: "/card-images/et4.png", altTag: "Education Times" },
        { image: "/card-images/et5.png", altTag: "Education Times" },
        {
          image: "/card-images/etAdmin.png",
          altTag: "Education Times Admin Panel",
        },
        {
          image: "/card-images/etAdmin1.png",
          altTag: "Education Times Admin Panel",
        },
        {
          image: "/card-images/etAdmin2.png",
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
        { image: "/card-images/ta.png", altTag: "Times Ascent" },
        { image: "/card-images/ta2.png", altTag: "Times Ascent" },
        { image: "/card-images/ta3.png", altTag: "Times Ascent" },
        { image: "/card-images/ta4.png", altTag: "Times Ascent" },
        { image: "/card-images/ta5.png", altTag: "Times Ascent" },
        {
          image: "/card-images/taAdmin.png",
          altTag: "Times Ascen Admin Panel",
        },
        {
          image: "/card-images/taAdmin1.png",
          altTag: "Times Ascen Admin Panel",
        },

        {
          image: "/card-images/taAdmin3.png",
          altTag: "Times Ascen Admin Panel",
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
    <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 md:gap-6 my-4">
      {projectsData?.map((data, key) => (
        <>
          <a
            href={data.url}
            target="_blank"
            key={key}
            className="border border-gray-400 shadow-md hover:shadow-2xl cursor-pointer overflow-hidden h-full transform transition duration-500 hover:scale-[1.03] rounded-md "
          >
            <Slider ref={book} {...settingsWeb}>
              {data?.image &&
                data?.image.map((item, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div
                      className={
                        "  top-0  rounded  mb-2 relative transform transition duration-500 hover:scale-[1.02] w-full h-48 md:h-64 "
                      }
                    >
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.altTag}
                          fill
                          className="object-cover rounded"
                        />
                      )}
                    </div>
                  </div>
                ))}
            </Slider>
            <div
              id="arrow"
              className="py-2 px-6 -mt-6 sm:mt-0   hover:-translate-y-10 transition-all ease-in-out duration-500"
            >
              <div className="flex justify-between p-0 m-0 ">
                <h3 className="mr-2 underline italic font-semibold pt-2 text-2xl  leading-tight sm:leading-normal">
                  {data?.projectName}
                </h3>
              </div>
              <p className="text-xs  font-normal">
                {data?.description}
              </p>

              <div className="text-sm flex flex-wrap gap-3 py-2">
                {data.technologiesUsed.map((index, key) => (
                  <Badge key={key} title={index} />
                ))}
              </div>
            </div>
          </a>
        </>
      ))}
    </div>
  );
};

export default ProjectsCard;
