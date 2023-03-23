import clsx from "clsx";
import MenuItem from "components/MenuItem";
import Burger from "icons/Burger";
import { FC, RefObject, useEffect, useMemo, useState } from "react";
import headerStyles from "./header.module.css";

export interface HeaderProps {
  aboutMeRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  techStackRef: RefObject<HTMLDivElement>;
  contactMeRef: RefObject<HTMLDivElement>;
}

const Header: FC<HeaderProps> = ({
  aboutMeRef,
  portfolioRef,
  techStackRef,
  contactMeRef,
}) => {
  const menu = useMemo(
    () => [
      { menu: "About Me", ref: aboutMeRef },
      { menu: "Portfolio", ref: portfolioRef },
      { menu: "Tech Stack", ref: techStackRef },
      { menu: "Contact Me", ref: contactMeRef },
    ],
    [aboutMeRef, contactMeRef, portfolioRef, techStackRef]
  );

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx("fixed top-0 w-full h-[6vh] z-[99]", {
        [headerStyles.headerBg]: scrollPosition > 0,
      })}
    >
      <div className="hidden md:flex h-[6vh] items-center justify-end space-x-5 px-[40px]">
        {menu.map((item, index) => {
          return <MenuItem key={item.menu} item={item} index={index} />;
        })}
      </div>

      <div className="md:hidden flex items-center h-[6vh] justify-end px-[20px]">
        <Burger />
      </div>
    </header>
  );
};

export default Header;
