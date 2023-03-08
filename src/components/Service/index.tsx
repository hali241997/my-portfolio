import { FC } from "react";

export interface ServiceProps {
  category: string;
  description: string;
}

const Service: FC<ServiceProps> = ({ category, description }) => {
  return (
    <div>
      <div className="mb-2 text-center text-[30px] md:text-left">
        {category}
      </div>

      <div className="mb-4 font-medium text-justify text-[16px] dark:text-white text-subtext">
        {description}
      </div>
    </div>
  );
};

export default Service;
