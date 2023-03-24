import { FC } from "react";

const DownArrow: FC = () => {
  return (
    <svg fill="none" width="40" viewBox="0 0 33 31">
      <path
        transform="scale(.87235 1.1131) rotate(45 -11 4.5)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        d="M1.5-1.5 25-1.5"
      />
      <path
        transform="scale(-.87235 -1.1131) rotate(-45 -26.3 39.4)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        d="M1.5-1.5 25-1.5"
      />
      <path
        transform="scale(.87235 1.1131) rotate(45 .2 8)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        d="M1.5-1.5 15.6-1.5"
      />
      <path
        transform="matrix(-.61684 .78709 -.61684 -.78709 25 1)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        d="M1.5-1.5 15.6-1.5"
      />
    </svg>
  );
};

export default DownArrow;
