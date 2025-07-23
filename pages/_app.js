import Layout from "@/components/Layout";
import "@/styles/globals.css";
import ThemeContextFunc from '../context/ThemeContext';
import { useRef } from "react";

export default function App({ Component, pageProps }) {
   const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const ProjectRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    aboutRef,
    skillRef,
    ProjectRef,
    experienceRef,
  };
  return(
    <ThemeContextFunc>

    <Component {...pageProps} />


  </ThemeContextFunc>);
}
