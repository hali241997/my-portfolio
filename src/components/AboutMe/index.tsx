import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import useBreakpoint from "hooks/useBreakpoint";
import { FC, RefObject } from "react";

export interface AboutMeProps {
  aboutMeRef: RefObject<HTMLDivElement>;
}

const stats = [
  { value: "40%", label: "SEO improvement" },
  { value: "30%", label: "Conversion boost" },
  { value: "2x", label: "Faster exports" },
  { value: "70%", label: "Fewer post-release bugs" },
];

const AboutMe: FC<AboutMeProps> = ({ aboutMeRef }) => {
  const breakpoint = useBreakpoint();

  return (
    <div ref={aboutMeRef} className="reveal">
      <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
        <div className="font-bold font-SourceCodePro lg:text-[36px] md:text-[26px] text-[20px] mb-[40px]">
          <span className="text-bluePrimary">01.</span> {`<about me>`}
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col flex-2 lg:mr-[40px]">
            <div className="font-RobotoMono md:text-[20px] text-[16px] md:text-left text-center">
              I&apos;m a Senior Full-Stack Engineer with 6+ years of experience
              shipping SaaS platforms, AI-integrated products, and mobile apps
              for US, UK, and enterprise clients.
              <br />
              <br />
              I specialize in React and Next.js frontends, NestJS and Node.js
              backends, and React Native for mobile — building applications that
              are performant, maintainable, and accessible.
              <br />
              <br />
              Recently at UX Pilot AI, shipping AI-powered design tooling. At
              HetraByte, I built Adacta.ai and Pendfunds from scratch. At
              MobileLive, I improved Staples&apos; e-commerce SEO by 40% and
              conversions by 30%. At GudangAda, I was promoted to Team Lead
              while driving a 40% increase in client adoption.
              <br />
              <br />
              <span className="text-bluePrimary md:text-[22px] text-[18px] font-[800]">
                Clean code. Fast delivery. Measurable impact.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 text-center rounded bg-[rgba(25,78,251,0.15)]"
                >
                  <div className="text-[24px] font-bold text-bluePrimary font-RobotoMono md:text-[28px]">
                    {stat.value}
                  </div>
                  <div className="text-[12px] text-gray-400 font-RobotoMono md:text-[14px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius:
                Math.min(
                  breakpoint === "xl" || breakpoint === "lg"
                    ? 400
                    : breakpoint === "sm"
                      ? 300
                      : 600,
                  w.innerWidth,
                  w.innerHeight,
                ) / 2,
              initSpeed: "fast",
            })}
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              color: "#194efb",
              fontWeight: "600",
              fontSize:
                breakpoint === "xl"
                  ? "20px"
                  : breakpoint === "lg"
                    ? "20px"
                    : breakpoint === "md"
                      ? "20px"
                      : "16px",
            }}
          >
            {[
              "React.js",
              "React Native",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "NestJS",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "Prisma",
              "Strapi",
              "Stripe",
              "OpenAI",
              "Tailwind CSS",
              "Material UI",
              "GraphQL",
              "Redux.js",
              "CI/CD",
              "Git",
              "GitHub",
            ]}
          </TagCloud>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
