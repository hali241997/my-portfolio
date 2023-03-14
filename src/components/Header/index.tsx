import { FC, useMemo } from "react";

const Header: FC = () => {
  const menu = useMemo(
    () => ["About", "Services", "Tech Stack", "Projects"],
    []
  );

  return (
    <header className="flex items-center justify-between lg:px-[100px] lg:pb-4 md:pb-4 pb-2 border-b">
      <div className="flex items-center">
        <img
          src="/images/header.png"
          alt="avatar"
          className="rounded-[50%] mr-4 h-[40px]"
        />
        <div className="font-[400] md:text-[20px] tracking-[2px] uppercase">
          Hasnain Ali
        </div>
      </div>

      <div className="hidden gap-4 lg:flex">
        {menu.map((item, index) => {
          return (
            <div key={index} className="uppercase cursor-pointer">
              {item}
            </div>
          );
        })}
      </div>

      <div className="hidden lg:flex">
        <a href="mailto:mhali241997@gmail.com" className="mr-4 underline">
          Fire Me An Email
        </a>
      </div>

      <button className="flex lg:hidden">
        <div className="hidden md:flex lg:hidden">
          <a href="mailto:mhali241997@gmail.com" className="mr-4 underline">
            Fire Me An Email
          </a>
        </div>
      </button>
    </header>
  );
};

export default Header;
