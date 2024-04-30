import ExpertiseCard from "./ExpertiseCard";

const MyExpertise = () => {
  const myExpertise = [
    {
      desc: "I possess expertise as a frontend developer, demonstrating proficient command over HTML5, CSS3, JavaScript ES6, TypeScript, React.js, Next.js, Redux, Tailwind.css, Context API, RESTful API, and DOM manipulation.",

      title: "Frontend Developer",
    },
    {
      desc: "I have acquired a high level of proficiency in effectively employing Git and GitHub for robust version control management.",
      title: "Git and Github",
    },
    {
      desc: "I possess a solid proficiency in API testing using Postman, demonstrating adeptness in designing and executing comprehensive test suites to ensure the reliability and functionality of APIs.",
      title: "API Testing Tool",
    },
  ];
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My Expertise
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px8 ">
        {myExpertise.map((item, idx) => (
          <ExpertiseCard key={idx} data={item} />
        ))}
      </div>
    </>
  );
};

export default MyExpertise;
