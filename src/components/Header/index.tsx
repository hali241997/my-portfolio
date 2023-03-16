import clsx from "clsx";
import Burger from "icons/Burger";
import { FC, useCallback, useMemo } from "react";
import revealStyles from "../../styles/reveal.module.css";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ height }) => {
  const menu = useMemo(
    () => ["About", "Services", "Tech Stack", "Projects"],
    []
  );

  const toCode = useCallback((menuItem: string) => {
    return `<${menuItem.toLowerCase()}>`;
  }, []);

  return (
    <header>
      <div
        className={clsx(
          "hidden items-center justify-end md:flex space-x-5 px-[40px]",
          revealStyles.revealContent
        )}
        style={{ height }}
      >
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

      <div
        className={clsx(
          "md:hidden items-center px-[20px] flex justify-end",
          revealStyles.revealContent
        )}
        style={{ height }}
      >
        <Burger />
      </div>
    </header>
  );
};

export default Header;
