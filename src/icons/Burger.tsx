import { useTheme } from "next-themes";
import { FC } from "react";

const Burger: FC = () => {
  const { theme } = useTheme();

  return (
    <svg
      fill="none"
      stroke={theme === "dark" ? "#FAF9F6" : "#121212"}
      width="24"
      height="24"
      stroke-width="1.5"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Burger;
