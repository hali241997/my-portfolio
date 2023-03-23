import AboutMe from "components/AboutMe";
import ContactMe from "components/ContactMe";
import Hero from "components/Hero";
import Portfolio from "components/Portfolio";
import TechStack from "components/TechStack";
import { FC, useEffect } from "react";

const HomePage: FC = () => {
  useEffect(() => {
    const revealContent = () => {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", revealContent);

    return () => {
      window.removeEventListener("scroll", revealContent);
    };
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <Portfolio />
      <TechStack />
      <ContactMe />
    </>
  );
};

export default HomePage;
