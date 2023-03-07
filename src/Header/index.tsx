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
    <header className="flex items-center justify-between lg:px-[100px] lg:pb-4 pb-2 border-b">
      <div className="flex items-center">
        <Image
          src="https://i.pravatar.cc/70"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-[50%] mr-4"
        />
        <div className="font-[400] md:text-[20px] md:tracking-[5px] tracking-[2px] uppercase">
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
    </header>
  );
};

export default Header;
