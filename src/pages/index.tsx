import AboutMe from "components/AboutMe";
import Hero from "components/Hero";
import Quote from "components/Quote";
import { FC, useEffect } from "react";
import Services from "components/Services";
import TechStack from "components/TechStack";

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
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <TechStack />

      {/* <Quote />
      <Services />
       */}
    </>
  );
};

export default HomePage;
