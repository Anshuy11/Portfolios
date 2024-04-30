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
      title: "SAS ONE",
      location: "Lucknow",
      year: "Jan 2023 - Present",
      desc: "In my recent role as a frontEnd developer, I played a pivotal role in the development and maintenance of the websites for EducationTimes (https://www.educationtimes.com/) and Times Ascent(https://timesascentcom/). Utilizing my expertise in Next.js, react.js, I implemented efficient and responsive front-end solutions,ensuring an optimal user experience for visitors.Furthermore, my proficiency in Tailwind CSS has allowed me to create visually appealing and consistent designs, while my in-depth knowledge of JavaScript has enabled the implementation of interactive features that enhance user engagement.One of my key strengths lies in my dedication to site performance optimization. I am well-versed in employing industry best practices to enhance page load times, optimize assets, and improve overall website speed. Through meticulous testing and analysis, I have successfully identified and addressed performance bottlenecks, resulting in a smoother and more efficient user experience.",
      url: "https://www.sasone.in/",
      role: "Frontend Developer",
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
        <link rel="canonical" href="https://portfolios-dusky.vercel.app/background" />
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
        <meta property="og:url" content="https://portfolios-dusky.vercel.app/background" />
        <meta
          property="og:image"
          content="favicon.ico"
        />
     
       
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      
      </Head>
      <BannerLayout>
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
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Education
          </div>

          {educationData.map((item, idx) => (
            <Edu_Card key={idx} data={item} />
          ))}
        </div>
        <div className="order-1 md:order-2">
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
      <Footer />
    </BannerLayout>
    </>
  
  );
}

export default Background;
