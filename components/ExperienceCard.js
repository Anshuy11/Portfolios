import React from 'react'

const ExperienceCard = () => {
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
      
          <div className="grid md:grid-cols-1     ">
         
          <div className="order-2 md:order-2">
            <div className="flex flex-col gap-y-4 ">
              

              {JobDescription.map((item, idx) => (
                  
                       <div key={idx} className="border border-gray-200 shadow-md hover:shadow-2xl transition px-8 py-10  rounded-md">
        <a href={item.url} target="_blank">
          {" "}
          <div className="flex-initial text-[17px]  font-medium">
            {item.title}
          </div>
        </a>

        <div className="text-sm text-LightGray font-normal italic mt-1 ">
          {item.role}
        </div>
        <div className="text-LightGray text-xs opacity-50 font-normal italic">
          <a href={`${item.url}`} target="_blank" rel="noreferrer">
            {item.url}
          </a>
        </div>
        <div className="text-LightGray text-sm font-normal mt-4 text-justify">
          {item.desc}
        </div>
        <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
          <div>{item.year}</div> <div>{item.location}</div>
        </div>
      </div>
               
              ))}
            </div>
          </div>
        </div>
  )
}

export default ExperienceCard