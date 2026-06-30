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
import headerStyles from "./header.module.css";

export interface HeaderProps {
  aboutMeRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  techStackRef: RefObject<HTMLDivElement>;
  contactMeRef: RefObject<HTMLDivElement>;
}

const Header: FC<HeaderProps> = ({
  aboutMeRef,
  experienceRef,
  portfolioRef,
  techStackRef,
  contactMeRef,
}) => {
  const menu = useMemo(
    () => [
      { menu: "About Me", ref: aboutMeRef },
      { menu: "Experience", ref: experienceRef },
      { menu: "Portfolio", ref: portfolioRef },
      { menu: "Tech Stack", ref: techStackRef },
      { menu: "Contact Me", ref: contactMeRef },
    ],
    [aboutMeRef, contactMeRef, experienceRef, portfolioRef, techStackRef]
  );

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((val) => !val);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

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
      <div className="flex h-[6vh] items-center justify-end px-[20px] md:px-[40px]">
        <button
          type="button"
          className="md:hidden"
          onClick={toggleDrawer}
          aria-expanded={drawerOpen}
          aria-controls="main-nav"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
        >
          {drawerOpen ? <Cross /> : <Burger />}
        </button>

        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={clsx(
            "fixed inset-x-0 top-[6vh] w-full bg-darkPrimary flex flex-col",
            "md:static md:top-auto md:flex md:flex-row md:items-center md:space-x-5 md:bg-transparent",
            drawerOpen ? "flex" : "hidden md:flex"
          )}
        >
          {menu.map((item, index) => (
            <MenuItem
              key={item.menu}
              item={item}
              index={index}
              onNavigate={closeDrawer}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
