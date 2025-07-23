import { useContext } from "react";
import { ThemeColor } from "@/context/ThemeContext";
import MobileSidebar from "./MobileSidebar";
import { useRouter } from "next/router";

const Header = ({sectionRefs,contactRef }) => {
  const { theme, ToggleFunc } = useContext(ThemeColor);
  const router = useRouter(null);
  const scrollToRef = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={
        theme === "Light"
          ? " bg-gradient-to-r   from-[#03758e] via-[#049292] to-[#03758e]   sticky top-0 z-50   h-[100px] text-white flex  justify-between  "
          : "   bg-black  h-[100px] text-white flex  justify-between   sticky top-0 z-50 "
      }
    >
      {/* Home section */}
     
        <div className="flex justify-start items-start gap-6 ">
         
          <div className="text-white mt-3  font-semibold sm:text-[14px] text-[12px] flex gap-1 cursor-pointer md:hidden">
            <MobileSidebar theme={theme} scrollToRef={scrollToRef} sectionRefs={sectionRefs} contactRef={contactRef} />
          </div>
        </div>
    
      <div className="md:flex  items-center pl-3 gap-8 hidden text-xl font-semibold mt-8 ">
         <div
            onClick={() => router.push("/")}
            className="relative flex justify-start items-start gap-6 cursor-pointer "
          >
            Home
          </div>
        {/* Projects section */}
        <div
          onClick={() => scrollToRef(sectionRefs?.ProjectRef)}
          className="relative flex justify-start items-start gap-6 cursor-pointer"
        >
          Projects
        </div>
        {/* Skills section */}
        <div
          onClick={() => scrollToRef(sectionRefs?.skillRef)}
          className="relative flex justify-start items-start gap-6 cursor-pointer"
        >
          Skills
        </div>
        {/* Experience section */}
        <div
          onClick={() => scrollToRef(sectionRefs?.experienceRef)}
          className="relative flex justify-start items-start gap-6 cursor-pointer"
        >
          Experience
        </div>

        {/* About section */}
        <div
          onClick={() => scrollToRef(sectionRefs?.aboutRef)}
          className="relative flex justify-start items-start gap-6 cursor-pointer"
        >
          About
        </div>
        <div
         onClick={() => contactRef?.current?.scrollIntoView({ behavior: 'smooth' })}
          className="relative flex justify-start items-start gap-6 cursor-pointer"
        >
          Contact
        </div>

        {/* Resume section */}
        <div
          onClick={() => router.push("/Anshu-YadavResume.pdf")}
          className="relative flex justify-start items-start gap-6 cursor-pointer"
        >
          Resume
        </div>

       
      </div>
      {/*  Dual theme section */}
      <div className="flex  items-center pl-3 gap-4  ">
        <div className="flex flex-col items-center pl-3 mt-10 pr-1 md:pr-0">
          <div
            className={`relative w-12 h-6 rounded-full border transition-all duration-500 ease-in-out ${
              theme === "Light"
                ? "bg-white border-gray-300"
                : "bg-white border-gray-300"
            }`}
          >
            <div
              onClick={ToggleFunc}
              className={`absolute top-0.5 h-5 w-5 flex items-center justify-center rounded-full cursor-pointer transition-all duration-500 ease-in-out
    ${theme === "Light" ? "translate-x-1 bg-white" : "translate-x-6 bg-black"}
  `}
            >
              {theme === "Light" ? (
                // Moon icon for dark mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
