import AboutMe from "components/AboutMe";
import Hero from "components/Hero";
import Quote from "Quote";
import { FC } from "react";
import Services from "components/Services";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Quote />
      <AboutMe />
      <Services />
    </>
  );
};

export default HomePage;
