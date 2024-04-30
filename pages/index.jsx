import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import Head from "next/head";
const home = () => {
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
        <link rel="canonical" href="https://portfolio-murex-one-46.vercel.app/" />
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
        <meta property="og:url" content="https://portfolio-murex-one-46.vercel.app/" />
        <meta
          property="og:image"
          content="favicon.ico"
        />
     
       
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      
      </Head>
      <div className="Home-Page -z-10">
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
      <Banner />
      <PortfolioSection />
      <MyExpertise />
      <Footer />
    </div>
    </>
   
  );
};

export default home;
