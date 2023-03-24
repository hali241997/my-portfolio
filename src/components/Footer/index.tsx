import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex flex-col justify-center py-5 space-y-5 text-center border-t-2 md:space-y-0 md:space-x-5 md:flex-row">
      <div className="font-bold text-[15px]">@Copyright 2022</div>
      <div className="text-[15px]">Hasnain Ali</div>
      <div className="text-[15px]">All rights reserved</div>
    </div>
  );
};

export default Footer;
