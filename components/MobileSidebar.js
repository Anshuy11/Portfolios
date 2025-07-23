import {  useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";


export default function MobileSidebar({theme,sectionRefs,scrollToRef,contactRef}) {
  const [isOpen, setIsOpen] = useState(false);
    const router = useRouter(null);
 


  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  return (
    <div className="md:hidden z-[999] ">
     
   

      <button onClick={toggleSidebar} className="p-2 mt-9">
        <Bars3Icon className="w-9 h-9 " />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0    bg-opacity-50 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 shadow-lg z-50 ${
         theme == "Light"
            ? "bg-gray-100 text-black"
            : "bg-gray-600 text-white"
        } transform  transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`flex items-center justify-between text-white p-4 border-b  border-white ${
           theme == "Light" ? "bg-gradient-to-r   from-[#03758e] via-[#049292] to-[#03758e] " : "bg-black"
          }`}
        >
          <div>
            <div className="text-lg font-semibold">
             Anshu Yadav
            </div>
           
          </div>

          <button onClick={toggleSidebar}>
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <div onClick={() => { closeSidebar(); router.push('/')}} className="">
            Home
          </div>
           <div onClick={() => { closeSidebar(); scrollToRef(sectionRefs?.ProjectRef)}} className="">
            Projects
          </div>
           <div onClick={() => { closeSidebar(); scrollToRef(sectionRefs?.skillRef)}} className="">
            Skills
          </div>
           <div onClick={() => { closeSidebar(); scrollToRef(sectionRefs?.experienceRef)}} className="">
            Experience
          </div>
           <div onClick={() => { closeSidebar(); scrollToRef(sectionRefs?.aboutRef)}} className="">
            About
          </div>
           <div onClick={() => { closeSidebar(); contactRef?.current?.scrollIntoView({ behavior: 'smooth' })}} className="">
            Contact
          </div>
          
           <div onClick={() => { closeSidebar(); router.push("/Anshu-YadavResume.pdf")}} className="">
            Resume
          </div>

          
        </nav>
      </div>
    </div>
  );
}
