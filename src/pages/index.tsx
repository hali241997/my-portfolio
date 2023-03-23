import AboutMe from "components/AboutMe";
import ContactMe from "components/ContactMe";
import Header from "components/Header";
import Hero from "components/Hero";
import Portfolio from "components/Portfolio";
import TechStack from "components/TechStack";
import { FC, useEffect, useRef } from "react";

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

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        aboutMeRef={aboutMeRef}
        portfolioRef={portfolioRef}
        techStackRef={techStackRef}
        contactMeRef={contactMeRef}
      />
      <Hero />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <TechStack techStackRef={techStackRef} />
      <ContactMe contactMeRef={contactMeRef} />
    </>
  );
};

export default HomePage;
