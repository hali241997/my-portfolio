import Project from "components/Project";
import { FC, RefObject } from "react";

export interface PortfolioProps {
  portfolioRef: RefObject<HTMLDivElement>;
}

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
    imagePath: "/images/circle-it.png",
    projectName: "CircleIt",
    description:
      "Developing CircleIt, an app for time-based greetings, utilizing advanced technologies (native-base, instabug-reactnative, react-native-fast-image, react-native-sound) for seamless user experience.",
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
  {
    imagePath: "/images/vulkan-solutions.png",
    projectName: "Vulkan Solutions",
    description:
      "Vulkan Solutions specializes in delivering custom software solutions to businesses of all sizes. Their experienced developers and designers are passionate to build future and committed to deliver the best services to our clients",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
    link: "https://vulkansolutions.com/",
  },
  {
    imagePath: "/images/seerene.png",
    projectName: "Seerene",
    description:
      "Collaborating on app development for Italian NGOs, consolidating all platforms into one. Currently in Phase 2 and committed to delivering top-quality results.",
    tags: ["JavaScript", "React Native", "Redux", "Axois", "Secure Storage"],
  },
];

const Portfolio: FC<PortfolioProps> = ({ portfolioRef }) => {
  return (
    <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
      <div
        ref={portfolioRef}
        className="font-bold font-SourceCodePro lg:text-[36px] md:text-[26px] text-[20px] mb-[40px] reveal"
      >
        <span className="text-bluePrimary">02.</span> {"<portfolio>"}
      </div>

      <div className="lg:mx-[100px] lg:space-y-[150px] space-y-[50px] block">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <Project key={project.projectName} {...project} isEven={isEven} />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
