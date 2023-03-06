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
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div>Logo Here</div>

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
