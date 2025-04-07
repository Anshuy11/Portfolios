import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import Head from "next/head";

function Background() {
  const educationData = [
    {
      title: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      detail:
        "Completed Bachelor of Engineering in Electronics and Communication",
      degree: "Bachelor of Engineering ",
      year: "2015-2019",
    },
    {
      title: "NSPS Inter College",
      detail: "Completed 12th in PCM from New Standard Public School Raebareli",
      degree: "12th",
      year: "2013-2014",
    },
    {
      title: "NASN Inter College",
      detail:
        "Completed 10th  from New Adarsh Shiksha Niketan Inter College  Raebareli",
      degree: "10th",
      year: "2011-2012",
    },
  ];

  const JobDescription = [
    {
      title: "Shobhit Infotech part of Shobhit Mediworld LLP",
      location: "Lucknow",
      year: "July 2024 - Present",
      desc: "I securely managed API tokens and user information using session storage, ensuring the protection of over 1000 user records. By engineering responsive and accessible user interfaces for diverse user types, I enhanced user engagement by 30%. Additionally, I optimized data access mechanisms, increasing user-specific query efficiency by 25% based on personalized requirements. My work on integrating the Google Location API significantly improved location-based features, while the development of dynamic and interactive data visualizations enhanced the experience for over 1000 SaaS users. Furthermore, I implemented a dual-theme website using the React Context API, allowing seamless light and dark mode toggling, which led to a 10% increase in user satisfaction.",
      url: "https://www.shobhitmediworld.com/",
      role: "Frontend Developer",
    },
    {
      title: "SAS ONE",
      location: "Lucknow",
      year: "Jan 2023 - June 2024",
      desc: "I integrated over five third-party APIs to enhance website functionality and improve user experience. By implementing robust authentication and authorization with NextAuth.js, I secured access for more than 100,000 users across web applications. Utilizing AMP tags, I created high-performance, mobile-friendly web stories, leading to a 30% increase in mobile traffic. Additionally, I optimized website performance, achieving a minimum score of 75+ on mobile and 95+ on desktop, resulting in a 60% improvement in site speed. I designed and implemented distinct schemas for list and detail pages, enhancing site navigation and boosting SEO rankings by 25%. Working closely with UI/UX designers, I translated over 20 design mockups into fully functional web pages, increasing user satisfaction by 20%. I also collaborated with back-end developers to integrate more than 200 RESTful APIs, ensuring seamless data exchange and optimized front-end performance. Furthermore, I developed and launched a SaaS platform for Education Times and Times Ascent, streamlining dynamic content management and reducing content update time by 30%.",
      url: "https://www.sasone.in/",
      role: "Software Developer",
    },
  ];
  return (
   
      <div>
      
        <div className="grid md:grid-cols-1 md:divide-x-4 md:divide-Green pb-2 pt-10 relative min-h-screen sm:pr-6 p-4 sm:p-0">
         
          <div className="order-2 md:order-2">
            <div className="flex flex-col gap-y-4 md:ml-12">
              <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
                Experience
              </div>

              {JobDescription.map((item, idx) => (
                <Exp_Card key={idx} data={item} />
              ))}
            </div>
          </div>
        </div>
     
      </div>
   
  );
}

export default Background;
