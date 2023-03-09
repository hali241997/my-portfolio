import { useEffect, useState } from "react";

export type iBreakpoints = "sm" | "md" | "lg" | "xl";

export const Breakpoints: { [key in iBreakpoints]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<iBreakpoints>("sm");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < Breakpoints.sm) {
        setBreakpoint("sm");
      } else if (
        window.innerWidth >= Breakpoints.sm &&
        window.innerWidth < Breakpoints.lg
      ) {
        setBreakpoint("md");
      } else if (
        window.innerWidth >= Breakpoints.lg &&
        window.innerWidth < Breakpoints.xl
      ) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
