import clsx from "clsx";
import Button from "components/Button";
import useBreakpoint from "hooks/useBreakpoint";
import DownArrow from "icons/DownArrow";
import GithubLine from "icons/GithubLine";
import LinkedInLine from "icons/LinkedInLine";
import MyEmail from "icons/MyEmail";
import WhatsappLine from "icons/WhatsappLine";
import { FC, useCallback, useEffect, useRef, RefObject } from "react";
import { constants } from "utils/constants";
import styles from "./hero.module.css";
import FiverrLine from "icons/FiverrLine";
import UpworkLine from "icons/UpworkLine";

const Hero: FC = () => {
  const breakpoint = useBreakpoint();

  const starryBg = useRef<HTMLDivElement>(null);
  const downArrow = useRef<HTMLButtonElement>(null);

  const handleGetInTouch = useCallback(() => {
    window.open(constants.whatsappLink, "_blank", "noopener,noreferrer");
  }, []);

  const handleDownloadResume = useCallback(() => {
    window.open(constants.resumeLink, "_blank", "noopener,noreferrer");
  }, []);

  const handleDownArrowClick = useCallback(() => {
    const scrollHeight = window.innerHeight;

    window.scrollTo({ top: scrollHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let starryBgCurrent: RefObject<HTMLDivElement>["current"];

    const moveStars = () => {
      starryBgCurrent?.classList.replace(styles.fadeIn, styles.stars);
      setTimeout(() => {
        breakpoint !== "sm" &&
          downArrow.current?.classList.replace("hidden", "block");
      }, 2000);
    };

    if (starryBg.current) {
      starryBgCurrent = starryBg.current;
      starryBgCurrent.addEventListener("animationend", moveStars);
    }

    return () => {
      if (starryBgCurrent) {
        starryBgCurrent.removeEventListener("animationend", moveStars);
      }
    };
  }, [breakpoint]);

  return (
    <div className="w-[100vw] h-[100vh] pt-[6vh] overflow-hidden relative">
      <div ref={starryBg} className={styles.fadeIn} />

      <button
        ref={downArrow}
        className={clsx("absolute bottom-2 left-1/2 hidden", styles.downArrow)}
        onClick={handleDownArrowClick}
      >
        <DownArrow />
      </button>

      <div
        className={clsx(
          "h-[94vh] md:px-[40px] px-[20px] flex items-center",
          styles.revealContent
        )}
      >
        <div className="z-10 flex flex-1">
          <div className="flex flex-col items-center space-y-6">
            <div className="lg:h-[50px] md:h-[200px] h-[150px] w-[1px] flex self-center bg-bluePrimary" />

            <a
              className="cursor-pointer"
              href={constants.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLine />
            </a>

            <a
              className="cursor-pointer"
              href={constants.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLine />
            </a>

            <a
              className="cursor-pointer"
              href={constants.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLine />
            </a>

            <a
              className="cursor-pointer"
              href={constants.fiverrLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiverrLine />
            </a>

            <a
              className="cursor-pointer"
              href={constants.upworkLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <UpworkLine />
            </a>

            <div className="lg:h-[50px] md:h-[200px] h-[150px] w-[1px] flex self-center bg-bluePrimary" />
          </div>

          <div className="flex flex-1">
            <div className="flex flex-col-reverse items-center flex-1 px-4 md:px-20 lg:flex-row">
              <div className="flex flex-col flex-1">
                <div className="font-bold lg:text-[46px] md:text-[36px] text-[20px] font-RobotoMono md:text-left text-center">
                  Hello,
                  <br />I am <span className="text-bluePrimary">Hasnain</span>,
                  <br />
                  Senior Full-Stack Engineer
                </div>

                <div className="mt-4 text-center text-gray-400 font-RobotoMono md:text-left">
                  I build{" "}
                  <span className="text-bluePrimary">SaaS platforms</span>,{" "}
                  <span className="text-bluePrimary">AI-integrated products</span>
                  , and mobile apps with React, Next.js, and React Native.
                </div>

                <div className="flex flex-col gap-4 self-center mt-12 sm:flex-row lg:self-start">
                  <Button classes="normal-case" onClick={handleGetInTouch}>
                    Let&apos;s get in touch!
                  </Button>
                  <Button classes="normal-case" onClick={handleDownloadResume}>
                    Download Resume
                  </Button>
                </div>
              </div>

              <img
                src="/images/me-1.png"
                alt="author"
                className="object-cover w-[160px] h-[160px] mb-12 lg:mb-0 md:w-[250px] md:h-[250px] rounded-full shadow-[0px_0px_60px_0px_rgba(25,78,251,0.4)]"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div className="lg:h-[70px] md:h-[230px] h-[165px] w-[1px] flex self-center bg-bluePrimary" />

            <a
              href={constants.mailToLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MyEmail />
            </a>

            <div className="lg:h-[70px] md:h-[230px] h-[165px] w-[1px] flex self-center bg-bluePrimary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
