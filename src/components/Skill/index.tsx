import { FC, ReactElement } from "react";

export interface SkillProps {
  component: ReactElement;
  name: string;
}

const Skill: FC<SkillProps> = ({ component, name }) => {
  return (
    <div className="flex flex-col items-center">
      {component}
      <p className="text-[16px] md:text-[24px] text-dark mt-[10px]">{name}</p>
    </div>
  );
};

export default Skill;
