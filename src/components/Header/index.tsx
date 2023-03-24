import clsx from "clsx";
import MenuItem from "components/MenuItem";
import Burger from "icons/Burger";
import Cross from "icons/Cross";
import {
  FC,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toCode } from "utils/conversion";
import headerStyles from "./header.module.css";

export interface HeaderProps {
  aboutMeRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  techStackRef: RefObject<HTMLDivElement>;
  contactMeRef: RefObject<HTMLDivElement>;
}

const Header: FC<HeaderProps> = ({
  aboutMeRef,
  portfolioRef,
  techStackRef,
  contactMeRef,
}) => {
  const menu = useMemo(
    () => [
      { menu: "About Me", ref: aboutMeRef },
      { menu: "Portfolio", ref: portfolioRef },
      { menu: "Tech Stack", ref: techStackRef },
      { menu: "Contact Me", ref: contactMeRef },
    ],
    [aboutMeRef, contactMeRef, portfolioRef, techStackRef]
  );

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((val) => !val);
  }, []);

  const handleClick = useCallback(
    (index: number) => {
      toggleDrawer();
      const item = menu[index];

      if (item.ref.current) {
        const current = item.ref.current;

        if (current.classList.contains("active")) {
          current.scrollIntoView({ behavior: "smooth" });
        } else {
          const rect = current.getBoundingClientRect();
          const offset = window.scrollY + rect.top - 0.4 * window.innerHeight;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }
    },
    [menu, toggleDrawer]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx("fixed top-0 w-full h-[6vh] z-[99]", {
        [headerStyles.headerBg]: scrollPosition > 0,
      })}
    >
      <div className="hidden md:flex h-[6vh] items-center justify-end space-x-5 px-[40px]">
        {menu.map((item, index) => {
          return <MenuItem key={item.menu} item={item} index={index} />;
        })}
      </div>

      <div className="md:hidden flex items-center h-[6vh] justify-end px-[20px]">
        <button onClick={toggleDrawer}>
          {drawerOpen ? <Cross /> : <Burger />}
        </button>
      </div>

      <div
        className={clsx("fixed inset-x-0 w-full bg-darkPrimary", {
          ["hidden"]: !drawerOpen,
        })}
      >
        {menu.map((item, index) => {
          return (
            <div
              key={item.menu}
              className="flex px-6 py-2 space-x-2 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <div className="text-bluePrimary font-SourceCodePro">
                {(index + 1).toString().padStart(2, "0")}.
              </div>
              <div className="font-SourceCodePro">{toCode(item.menu)}</div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
