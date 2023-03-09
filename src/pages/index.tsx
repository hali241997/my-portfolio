import AboutMe from "components/AboutMe";
import Hero from "components/Hero";
import Quote from "components/Quote";
import { FC } from "react";
import Services from "components/Services";
import TechStack from "components/TechStack";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Quote />
      <AboutMe />
      <Services />
      <TechStack />
    </>
  );
};

export default HomePage;
