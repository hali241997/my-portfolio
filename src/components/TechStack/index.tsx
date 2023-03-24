import Skill from "components/Skill";
import useBreakpoint from "hooks/useBreakpoint";
import Expo from "icons/Expo";
import Expressjs from "icons/Expressjs";
import Firebase from "icons/Firebase";
import Git from "icons/Git";
import Github from "icons/Github";
import JavaScript from "icons/JavaScript";
import MaterialUI from "icons/MaterialUI";
import Monogdb from "icons/Monogdb";
import MySQL from "icons/MySQL";
import Nestjs from "icons/Nestjs";
import Nextjs from "icons/Nextjs";
import Nodejs from "icons/Nodejs";
import Reactjs from "icons/Reactjs";
import ReactNative from "icons/ReactNative";
import Tailwindcss from "icons/Tailwindcss";
import TypeScript from "icons/TypeScript";
import { FC, RefObject, useMemo } from "react";

export interface TechStackProps {
  techStackRef: RefObject<HTMLDivElement>;
}

const TechStack: FC<TechStackProps> = ({ techStackRef }) => {
  const breakpoint = useBreakpoint();

  const techs = useMemo(() => {
    return [
      {
        component: <JavaScript width={breakpoint === "sm" ? "50" : "100"} />,
        name: "JavaScript",
      },
      {
        component: <TypeScript width={breakpoint === "sm" ? "50" : "100"} />,
        name: "TypeScript",
      },
      {
        component: <Reactjs width={breakpoint === "sm" ? "50" : "100"} />,
        name: "React.js",
      },
      {
        component: <ReactNative width={breakpoint === "sm" ? "68" : "132"} />,
        name: "React Native",
      },
      {
        component: <Expo width={breakpoint === "sm" ? "58" : "116"} />,
        name: "Expo",
      },
      {
        component: <Nextjs width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Next.js",
      },
      {
        component: <MaterialUI width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Material UI",
      },
      {
        component: <Tailwindcss width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Tailwind CSS",
      },
      {
        component: <Nodejs width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Node.js",
      },
      {
        component: <Nestjs width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Nest.js",
      },
      {
        component: <Expressjs width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Express.js",
      },
      {
        component: <MySQL width={breakpoint === "sm" ? "50" : "100"} />,
        name: "MySQL",
      },
      {
        component: <Git width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Git",
      },
      {
        component: <Github width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Github",
      },
      {
        component: <Monogdb width={breakpoint === "sm" ? "50" : "100"} />,
        name: "MongoDB",
      },
      {
        component: <Firebase width={breakpoint === "sm" ? "50" : "100"} />,
        name: "Firebase",
      },
    ];
  }, [breakpoint]);

  return (
    <div ref={techStackRef} className="reveal">
      <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
        <div className="font-bold font-SourceCodePro lg:text-[36px] md:text-[26px] text-[20px] mb-[40px]">
          <span className="text-bluePrimary">03.</span> {"<tech stack>"}
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {techs.map((tech) => {
            return <Skill key={tech.name} {...tech} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
