import { FC, RefObject } from "react";

export interface ExperienceProps {
  experienceRef: RefObject<HTMLDivElement>;
}

const experiences = [
  {
    company: "UX Pilot AI",
    role: "Senior JavaScript Developer",
    period: "Jul 2025 – Jun 2026",
    bullets: [
      "Enhanced Figma-to-HTML export reliability by 40% and sped up exports by 2x through pipeline optimizations.",
      "Drove 50% more React prototype usage by shipping the HTML-to-React pipeline and React Focus Mode.",
      "Improved designer workflow efficiency by 35% with a unified editing workspace replacing tool switching.",
    ],
  },
  {
    company: "HetraByte",
    role: "Lead Engineer",
    period: "Apr 2023 – Jul 2025",
    bullets: [
      "Built and launched Pendfunds.com, Vulkan Solutions, and Adacta.ai from scratch using React, Next.js, Strapi, and Nest.js.",
      "Integrated AI features into Adacta.ai, contributing to a 15% increase in product growth.",
      "Led technical strategy, client communication, and delivery for US and UK-based clients.",
    ],
  },
  {
    company: "MobileLive",
    role: "Senior Software Engineer",
    period: "Feb 2024 – Dec 2024",
    bullets: [
      "Led feature development and performance optimization for Staples' eCommerce platform using React.js and Node.js.",
      "Improved SEO by 40% and boosted conversion rates by 30% through accessibility upgrades and UX improvements.",
      "Delivered major Apple landing pages 25% faster than planned with seamless Contentful CMS integration.",
    ],
  },
  {
    company: "GudangAda",
    role: "Software Engineer → Team Lead",
    period: "Mar 2021 – Dec 2022",
    bullets: [
      "Architected and maintained a large-scale SaaS application using Next.js, TypeScript, and a monorepo approach.",
      "Led modules for Authentication, Employee Access, and Reporting, driving a 40% increase in client adoption.",
      "Established CI/CD pipelines for automated testing, reducing post-release bugs by 70%.",
    ],
  },
  {
    company: "Zepto Systems",
    role: "React Native Developer",
    period: "Aug 2020 – Mar 2021",
    bullets: [
      "Revamped the Seerene NGO platform and developed RightCRM from scratch.",
      "Specialized in video processing solutions for mobile apps using react-native-ffmpeg.",
      "Expanded Zepto's software portfolio with production-ready mobile applications.",
    ],
  },
  {
    company: "YSTL",
    role: "React Native Developer",
    period: "Jan 2020 – Aug 2020",
    bullets: [
      "Led frontend and backend development for CircleIt and LetsRead projects.",
      "Integrated Google Analytics to drive data-informed UX improvements.",
      "Delivered cross-platform mobile features for scheduled messaging and social engagement.",
    ],
  },
];

const Experience: FC<ExperienceProps> = ({ experienceRef }) => {
  return (
    <div ref={experienceRef} className="reveal">
      <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
        <div className="font-bold font-SourceCodePro lg:text-[36px] md:text-[26px] text-[20px] mb-[40px]">
          <span className="text-bluePrimary">02.</span> {"<experience>"}
        </div>

        <div className="lg:mx-[100px] space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="p-6 rounded border border-[rgba(25,78,251,0.3)] bg-[rgba(25,78,251,0.05)]"
            >
              <div className="flex flex-col justify-between gap-2 mb-4 md:flex-row md:items-center">
                <div>
                  <div className="text-[22px] font-bold font-RobotoMono">
                    {exp.company}
                  </div>
                  <div className="text-bluePrimary font-RobotoMono text-[15px]">
                    {exp.role}
                  </div>
                </div>
                <div className="text-[14px] text-gray-400 font-RobotoMono">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 list-disc list-inside font-RobotoMono text-[15px] text-[#dbdbdb]">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
