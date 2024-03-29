import useBreakpoint from "hooks/useBreakpoint";
import { FC } from "react";

const Ios: FC = () => {
  const breakpoint = useBreakpoint();

  return (
    <svg
      width={
        breakpoint === "lg" || breakpoint === "xl" || breakpoint === "md"
          ? "24"
          : "15"
      }
      fill="white"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M248.6 123.5c-5.4-29.7 8.6-60.3 25.6-81 18.6-22.6 50.6-40 78-42 4.6 31.1-8.1 61.5-24.9 83-18 23-48.8 41-78.7 40zM409 231a109 109 0 0 1 51.3-59.1C434 139.2 397 120 362.3 120c-46 0-65.6 22-97.6 22-33 0-58-22-97.8-22-39.2 0-80.8 23.9-107.2 64.6-9.7 15-16.3 33.8-19.9 54.6-10 58.4 5 134.5 49.3 202.1 21.5 32.8 50.3 69.8 87.9 70.1 33.4.3 43-21.4 88.2-21.6 45.4-.3 54 21.8 87.4 21.5 37.5-.3 67.9-41.2 89.5-74a370.2 370.2 0 0 0 33-62 113.6 113.6 0 0 1-66-144.3z" />
    </svg>
  );
};

export default Ios;
