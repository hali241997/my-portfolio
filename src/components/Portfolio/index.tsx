import Project from "components/Project";
import { FC } from "react";

const Portfolio: FC = () => {
  const projects = [
    {
      imagePath: "/images/saas.png",
      projectName: "GudangAda SaaS Web Solusi",
      description:
        "A SaaS web app for Indonesia that connects wholesalers and retailers in the FMCG market. Made the product using Next.js with Material UI in a mono-repository structure",
      tags: ["TypeScript", "Next.js", "Material UI", "React", "Redux"],
      link: "https://websolusi.gudangada.com/",
    },
    {
      imagePath: "/images/saas-landing.png",
      projectName: "GudangAda SaaS Web Solusi Landing",
      description:
        "The landing page for the SaaS app for Indonesia that connects wholesalers to retailers in the FMCG market. Made the product using Next.js with Tailwind CSS",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
      link: "https://solusi.gudangada.com/",
    },
    {
      imagePath: "/images/seerene.png",
      projectName: "Seerene",
      description:
        "Currently working with a client to build an app designed for NGOs in Italy. The goal is to consolidate all NGO platforms under a single umbrella. I built the app from the ground up, and are currently in Phase 2 of the project. I am committed to leading this effort and ensuring the app is user-friendly and effective.",
      tags: ["JavaScript", "React Native", "Redux", "Axois", "Secure Storage"],
    },
    {
      imagePath: "/images/circle-it.png",
      projectName: "CircleIt",
      description:
        "Currently leading the development of CircleIt, an app that allows you to send greetings across time. For this project, I have been utilizing advanced technologies such as native-base, moment, instabug-reactnative, react-native-fast-image, react-native-firebase, react-native-modal, and react-native-sound to ensure a seamless user experience.",
      tags: [
        "JavaScript",
        "React Native",
        "Redux",
        "Secure Storage",
        "Native Base",
      ],
      androidLink:
        "https://play.google.com/store/apps/details?id=com.circleit&hl=en",
      iosLink: "https://apps.apple.com/us/app/circleit/id1329263554",
    },
  ];

  return (
    <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
      <div className="font-bold font-SourceCodePro lg:text-[36px] md:text-[26px] text-[20px] mb-[40px]">
        <span className="text-bluePrimary">02.</span> {"<portfolio>"}
      </div>

      <div className="mx-[100px] space-y-[150px]">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return <Project key={project.link} {...project} isEven={isEven} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
