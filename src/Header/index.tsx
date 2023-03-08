import Burger from "icons/Burger";
import Moon from "icons/Moon";
import Sun from "icons/Sun";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

const Header: FC = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = useCallback(() => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="cursor-pointer" onClick={() => setTheme("light")}>
          <Sun />
        </div>
      );
    }

    return (
      <div className="cursor-pointer" onClick={() => setTheme("dark")}>
        <Moon />
      </div>
    );
  }, [mounted, setTheme, systemTheme, theme]);

  const menu = useMemo(
    () => ["About", "Services", "Tech Stack", "Projects"],
    []
  );

  return (
    <header className="flex items-center justify-between lg:px-[100px] lg:pb-4 md:pb-4 pb-2 border-b">
      <div className="flex items-center">
        <img
          src="https://i.pravatar.cc/70"
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
        {renderThemeChanger()}
      </div>

      <button className="flex lg:hidden">
        <div className="hidden md:flex lg:hidden">
          <a href="mailto:mhali241997@gmail.com" className="mr-4 underline">
            Fire Me An Email
          </a>
        </div>

        <div className="mr-4">{renderThemeChanger()}</div>

        {mounted && <Burger theme={theme === "dark" ? "dark" : "light"} />}
      </button>
    </header>
  );
};

export default Header;
