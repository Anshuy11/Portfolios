import ExperienceCard from "@/components/ExperienceCard";
import Layout from "@/components/Layout";
import ProjectsCard from "@/components/ProjectsCard";
import SkillsCard from "@/components/SkillsCard";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const ProjectRef = useRef(null);
  const skillRef = useRef(null);
  const sectionRefs = {
    aboutRef,
    skillRef,
    ProjectRef,
    experienceRef,
  };

  return (
    <Layout sectionRefs={sectionRefs} contactRef={contactRef}>
      <Head>
        <meta charSet="utf-8" />

        <title>
          {
            "Anshu Yadav-Frontend Developer"
          }
        </title>
        <meta
          name="description"
          content={
            "Frontend Developer with 2.8+ years of experience in building scalable React and Next.js apps. Experienced in frontend system design, including HLD, SSR/CSR strategies, Redux/Context-based state management, and lazy loading for performance."
          }
        />
        <link rel="canonical" href="https://portfolios-dusky.vercel.app/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico" />
        <meta
          property="og:title"
          content={
            "Anshu Yadav-Frontend Developer"
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            "Frontend Developer with 2.8+ years of experience in building scalable React and Next.js apps. Experienced in frontend system design, including HLD, SSR/CSR strategies, Redux/Context-based state management, and lazy loading for performance."
          }
        />
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="robots" content="NOODP" />
        <meta
          property="og:url"
          content="https://portfolios-dusky.vercel.app/"
        />
        <meta property="og:image" content="favicon.ico" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <div className=" px-6 py-10 rounded-xl shadow-lg mx-auto md:mt-10 mt-6 md:mb-10 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4  border-b border-gray-500 pb-2 inline-block">
          Anshu Yadav
        </h1>
        <p
          ref={aboutRef}
          className="leading-relaxed text-base sm:text-lg mt-4 section scroll-mt-64"
        >
          Frontend Developer with{" "}
          <span className="font-semibold ">2.7+ years</span> of experience
          building scalable, high-performance React and Next.js applications.
          Proficient in creating{" "}
          <span className="font-medium text-blue-500">pixel-perfect UIs</span>,
          optimizing performance, and integrating modern APIs. Skilled in{" "}
          <span className="font-medium text-blue-500">
            SSR, Redux Toolkit, Context API
          </span>
          , and Component Architecture. Passionate about solving complex UI
          challenges and delivering{" "}
          <span className="text-blue-500">seamless user experiences</span>.
        </p>
      </div>

      <div
        ref={skillRef}
        className="  mx-auto md:mt-10 mt-6 md:mb-10 mb-6 section  scroll-mt-32"
      >
        <h2 className=" text-2xl sm:text-3xl font-bold mb-4">Skill & Tool</h2>
        <div className="px-6 py-10 rounded-xl shadow-lg">
          <SkillsCard />
        </div>
      </div>
      <div
        ref={ProjectRef}
        className="mx-auto md:mt-10 mt-6 md:mb-10 mb-6 section  scroll-mt-32"
      >
      
        <ProjectsCard />
      </div>
      <div
        ref={experienceRef}
        className="mx-auto md:mt-10 mt-6 md:mb-10 mb-6 section scroll-mt-32"
      >
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">Experience</h4>
        <ExperienceCard />
      </div>
    </Layout>
  );
}
