import { useTheme } from "next-themes";
import { FC, useCallback, useEffect, useState } from "react";

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
      return <div onClick={() => setTheme("light")}>Sun</div>;
    }

    return <div onClick={() => setTheme("dark")}>Moon</div>;
  }, [mounted, setTheme, systemTheme, theme]);

  return (
    <header className="border-b border-gray-100">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6">
        <div>Logo Here</div>

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
