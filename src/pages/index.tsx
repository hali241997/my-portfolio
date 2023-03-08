import AboutMe from "AboutMe";
import Hero from "Hero";
import Quote from "Quote";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Quote />
      <AboutMe />
    </>
  );
};

export default HomePage;
