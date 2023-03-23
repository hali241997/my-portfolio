import clsx from "clsx";
import Burger from "icons/Burger";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import headerStyles from "./header.module.css";

const Header: FC = () => {
  const menu = useMemo(
    () => ["About Me", "Portfolio", "Tech Stack", "Contact Me"],
    []
  );

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const toCode = useCallback((menuItem: string) => {
    return `<${menuItem.toLowerCase()}>`;
  }, []);

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
          return (
            <div key={item} className="flex space-x-2 cursor-pointer">
              <div className="text-bluePrimary font-SourceCodePro">
                {(index + 1).toString().padStart(2, "0")}.
              </div>
              <div className="font-SourceCodePro">{toCode(item)}</div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden flex items-center h-[6vh] justify-end px-[20px]">
        <Burger />
      </div>
    </header>
  );
};

export default Header;
