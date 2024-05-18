import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { HiMail } from "react-icons/hi";

import Footer from "../components/Footer";
import Head from "next/head";





const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <link rel="canonical" href="https://portfolios-dusky.vercel.app/contact" />
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
        <meta property="og:url" content="https://portfolios-dusky.vercel.app/contact" />
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
      <div className="  px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Lucknow</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <a href="https://www.sasone.in/" target="_blank">
                  {" "}
                  <span className="text-LightGray md:text-sm">SAS ONE</span>
                </a>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  anshuy115@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <a
                  href="https://www.linkedin.com/in/anshu-yadav-62444a1a0/"
                  target="_blank"
                >
                  {" "}
                  <span className="text-LightGray text-sm">Anshu Yadav</span>
                </a>{" "}
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">+91 8830001375</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="mailto:anshuy115@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/Anshuy11"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/anshu-yadav-62444a1a0/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className=" bottom-0">
        <Footer />
      </div>
    </BannerLayout>
   </> 
  );
};

export default Contact;
