import React from "react";
import Badge from "./Badge";

const SkillsCard = () => {
  const TECH_STACK = [
    "JavaScript",
    "TypeScript",
    "React.JS",
    "Next.js",

    "Context API",
    "Redux",
    "SSR",
    "Payment Gateway",
    "CSS3",
    "HTML5",
    " React Testing Library (RTL)",
    "Jest",
    " High-Level Design (HLD)",
    " Scalable Component Architecture",
    "Node.JS",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST API",
    "GraphQL",

    "Local Storage",
    "Session Storage",
    "Lazy Loading",
    "Core Web Vital",

    "Vite",
    "Babel",
    "Git & GitHub",
    "CI/CD",
    "DSA",
    "Debugging",
    "Postman",
  ];

  return (
    <div className="text-sm flex flex-wrap gap-3 py-2">
      {TECH_STACK.map((index, key) => (
        <Badge key={key} title={index} />
      ))}
    </div>
  );
};

export default SkillsCard;
