import Skill from "components/Skill";
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
import { FC, useMemo } from "react";

const TechStack: FC = () => {
  const techs = useMemo(() => {
    return [
      { component: <JavaScript />, name: "JavaScript" },
      { component: <TypeScript />, name: "TypeScript" },
      { component: <Reactjs />, name: "React.js" },
      { component: <ReactNative />, name: "React Native" },
      { component: <Expo />, name: "Expo" },
      { component: <Nextjs />, name: "Next.js" },
      { component: <MaterialUI />, name: "Material UI" },
      { component: <Tailwindcss />, name: "Tailwind CSS" },
      { component: <Nodejs />, name: "Node.js" },
      { component: <Nestjs />, name: "Nest.js" },
      { component: <Expressjs />, name: "Express.js" },
      { component: <MySQL />, name: "MySQL" },
      { component: <Git />, name: "Git" },
      { component: <Github />, name: "Github" },
      { component: <Monogdb />, name: "MongoDB" },
      { component: <Firebase />, name: "Firebase" },
    ];
  }, []);

  return (
    <div className="reveal">
      <div className="lg:mx-[100px] mt-[80px]">
        <div className="font-bold text-center text-[40px] mb-[40px]">
          My Tech Stack
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
