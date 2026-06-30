import Project from "components/Project";
import { FC, RefObject } from "react";

export interface PortfolioProps {
  portfolioRef: RefObject<HTMLDivElement>;
}

const projects = [
  {
    imagePath: "/images/adacta-ai.png",
    projectName: "Adacta.ai",
    role: "Full Stack Developer",
    description:
      "AI-driven personal assistant that organizes documents, emails, and tasks in one place — with smart reminders, AI chat, and proactive planning.",
    tags: ["React.js", "Next.js", "Prisma", "PostgreSQL", "OpenAI"],
    link: "https://app.adacta.ai/",
  },
  {
    imagePath: "/images/pendfunds.png",
    projectName: "Pendfunds",
    role: "Full Stack Engineer",
    description:
      "Stripe-powered escrow platform for clients and freelancers — fund contracts upfront, release payments after review, and resolve disputes fairly.",
    tags: ["React.js", "Next.js", "NestJS", "Stripe", "AWS"],
    link: "https://pendfunds.com/",
  },
  {
    imagePath: "/images/gudangada.png",
    projectName: "GudangAda SaaS",
    role: "Frontend Engineer → Frontend Team Lead",
    description:
      "SaaS platform connecting FMCG wholesalers and retailers in Indonesia — inventory, sales tracking, stock alerts, and business reporting in one place.",
    tags: ["React.js", "Next.js", "Material UI", "CI/CD", "Vercel"],
    link: "https://gudangada.com/",
  },
  {
    imagePath: "/images/vulkan-solutions-2.png",
    projectName: "Vulkan Solutions",
    role: "Full Stack Engineer",
    description:
      "Modern, animated marketing site showcasing IT services, process, and credibility — built for strong visual storytelling and performance.",
    tags: ["React.js", "Next.js", "Strapi", "Framer Motion", "Vercel"],
    link: "https://www.vulkansolutions.com/",
  },
  {
    imagePath: "/images/circle-it-2.png",
    projectName: "CircleIt",
    role: "Full Stack Engineer",
    description:
      "Cross-generational messaging app for scheduling messages, birthday cards, e-gifts, and flowers for future life moments.",
    tags: ["React Native", "Firebase", "Node.js", "Socket.io", "MySQL"],
    androidLink:
      "https://play.google.com/store/apps/details?id=com.circleit&hl=en",
    iosLink: "https://apps.apple.com/us/app/circleit/id1329263554",
  },
  {
    imagePath: "/images/seerene-2.png",
    projectName: "Seerene",
    role: "React Native Engineer",
    description:
      "Mobile app for NGOs and patients to book medical transport, manage profiles, and handle payments for hospital and dialysis visits.",
    tags: [
      "React Native",
      "Google Maps",
      "Stripe",
      "Google Auth",
      "Facebook Auth",
    ],
  },
];

const Portfolio: FC<PortfolioProps> = ({ portfolioRef }) => {
  return (
    <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
      <div
        ref={portfolioRef}
        className="font-bold font-SourceCodePro lg:text-[36px] md:text-[26px] text-[20px] mb-[40px] reveal"
      >
        <span className="text-bluePrimary">03.</span> {"<portfolio>"}
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
