import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import useBreakpoint from "hooks/useBreakpoint";
import { FC } from "react";

const AboutMe: FC = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className="reveal">
      <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
        <div className="font-bold font-RobotoMono lg:text-[36px] md:text-[26px] text-[20px] mb-[40px]">
          <span className="text-bluePrimary">01.</span> About Me
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col flex-2 lg:mr-[40px]">
            <div className="font-RobotoMono md:text-[20px] text-[16px] md:text-left text-center">
              I&apos;ve been sailing the web and mobile development seas ever
              since my student years more than 5 years ago. I&apos;ve been
              creating everything from regular websites and dashboards, all the
              way to complex mobile applications and open-source libraries.
              <br />
              <br />
              The main characteristic of my work one could give for all my these
              years has been simple:
              <br />
              <br />
              <span className="text-bluePrimary md:text-[26px] text-[20px] font-[800]">
                Get 💩 done. Fast.
              </span>
              <br />
              <br />I have a proven ability to write clean and modern JS/TS code
              with a strict code style, and at a fast pace. My expertise in web
              development ranges from the early days of jQuery, PHP, and plain
              CSS, to the current React.js/Next.js and NestJS frameworks. By
              utilizing these technologies appropriately, I strive to create
              applications that are simplified, maintainable, and accessible.
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
                  w.innerHeight
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
              "HTML",
              "CSS",
              "React.js",
              "React Native",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "NestJS",
              "REST",
              "GraphQL",
              "Express.js",
              "Node.js",
              "VSCode",
              "Git",
              "Github",
              "Redux.js",
            ]}
          </TagCloud>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
