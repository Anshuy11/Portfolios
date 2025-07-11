import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import Head from "next/head";

function Background() {
  

  const JobDescription = [
    {
      title: "Shobhit Infotech part of Shobhit Mediworld LLP",
      location: "Lucknow",
      year: "July 2024 - Present",
      desc: "Built secure session-based storage for 1000+ users, enhancing data access efficiency by 25%. Integrated Google Location API to reduce input time by 40% and improve user engagement. Developed dual-theme interactive SaaS dashboards using React Context API, boosting user experience for over 1000 users. Implemented a secure payment gateway for smooth and reliable transactions.",
      url: "https://www.shobhitmediworld.com/",
      role: "Software Developer",
    },
    {
      title: "SAS ONE",
      location: "Lucknow",
      year: "Jan 2023 - June 2024",
      desc: "Integrated 5+ third-party and RESTful APIs, ensuring smooth frontend-backend communication. Implemented secure authentication with NextAuth for 100K+ users. Built high-performance AMP web stories, boosting mobile traffic by 30% and site speed by 60%. Converted 20+ mockups into responsive pages and developed a custom CMS, reducing content update time by 30%.",
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
