import AboutMe from "components/AboutMe";
import ContactMe from "components/ContactMe";
import Header from "components/Header";
import Hero from "components/Hero";
import Portfolio from "components/Portfolio";
import TechStack from "components/TechStack";
import Head from "next/head";
import { FC, useEffect, useRef } from "react";

const HomePage: FC = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

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
      <Head>
        <title>Hasnain Ali - Providing Full-Stack Development Services</title>
        <meta
          name="description"
          content="Providing Full-Stack Development Services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
