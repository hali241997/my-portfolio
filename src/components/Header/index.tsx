import Burger from "icons/Burger";
import { FC, useCallback, useMemo } from "react";
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
        className="hidden items-center justify-end md:flex space-x-5 px-[40px]"
        style={{ height }}
      >
        {menu.map((item, index) => {
          return (
            <div key={item} className="flex space-x-2 cursor-pointer">
              <div className="text-bluePrimary font-RobotoMono">
                {(index + 1).toString().padStart(2, "0")}.
              </div>
              <div className="font-RobotoMono">{toCode(item)}</div>
            </div>
          );
        })}
      </div>

      <div
        className="md:hidden items-center px-[20px] flex justify-end"
        style={{ height }}
      >
        <Burger />
      </div>
    </header>
  );
};

export default Header;
