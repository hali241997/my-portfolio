import useBreakpoint from "hooks/useBreakpoint";
import { FC } from "react";

const FiverrLine: FC = () => {
  const breakpoint = useBreakpoint();

  return (
    <svg
      width={breakpoint === "sm" ? "25" : "30"}
      fill="none"
      viewBox="0 0 161 195"
    >
      <path
        d="m110.83 187.12h42.134v-124.84h-79.588v-9.3605s0-10.925 10.925-10.925h26.53v-34.326h-26.53s-53.059 0-53.059 45.251v9.3605h-23.401v34.326h23.401v90.501h42.134v-90.489h37.454v90.501z"
        stroke="#194EFB"
        strokeLinejoin="round"
        strokeWidth="14.55"
      />
    </svg>
  );
};

export default FiverrLine;
