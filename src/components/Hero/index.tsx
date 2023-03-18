import clsx from "clsx";
import Button from "components/Button";
import useBreakpoint from "hooks/useBreakpoint";
import DownArrow from "icons/DownArrow";
import GithubLine from "icons/GithubLine";
import LinkedInLine from "icons/LinkedInLine";
import MyEmail from "icons/MyEmail";
import WhatsappLine from "icons/WhatsappLine";
import { FC, useCallback, useEffect, useRef } from "react";
import { constants } from "utils/constants";
import revealStyles from "../../styles/reveal.module.css";
import styles from "./hero.module.css";

const Hero: FC = () => {
  const breakpoint = useBreakpoint();

  const starryBg = useRef<HTMLDivElement>(null);
  const downArrow = useRef<HTMLButtonElement>(null);

  const handleGetInTouch = useCallback(() => {
    window.open(constants.whatsappLink, "_blank");
  }, []);

  const handleDownArrowClick = useCallback(() => {
    const scrollHeight = window.innerHeight;

    window.scrollTo({ top: scrollHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (starryBg.current) {
      starryBg.current.addEventListener("animationend", () => {
        starryBg.current?.classList.replace(styles.fadeIn, styles.stars);
        setTimeout(() => {
          breakpoint !== "sm" &&
            downArrow.current?.classList.replace("hidden", "block");
        }, 2000);
      });
    }
  }, [breakpoint]);

  return (
    <div className="w-[100vw] h-[94vh] overflow-hidden relative">
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
          revealStyles.revealContent
        )}
      >
        <div className="z-10 flex flex-1">
          <div className="flex flex-col space-y-10">
            <div className="lg:h-[50px] md:h-[200px] h-[150px] w-[1px] flex self-center bg-bluePrimary" />

            <a className="cursor-pointer" href={constants.githubLink}>
              <GithubLine />
            </a>

            <a className="cursor-pointer" href={constants.whatsappLink}>
              <WhatsappLine />
            </a>

            <a className="cursor-pointer" href={constants.linkedInLink}>
              <LinkedInLine />
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
                  Full-Stack Engineer
                </div>

                <div className="mt-4 text-center text-gray-400 font-RobotoMono md:text-left">
                  Designing and developing{" "}
                  <span className="text-bluePrimary">Mobile</span> and{" "}
                  <span className="text-bluePrimary">Web</span> solutions that
                  work for you
                </div>

                <div className="flex self-center lg:self-start">
                  <Button
                    classes="mt-12 normal-case"
                    onClick={handleGetInTouch}
                  >
                    Let&apos;s get in touch!
                  </Button>
                </div>
              </div>

              <img
                src="/images/hero.png"
                alt="author"
                className="object-cover w-[160px] h-[160px] mb-12 lg:mb-0 md:w-[250px] md:h-[250px] rounded-full shadow-[0px_0px_60px_0px_rgba(25,78,251,0.4)]"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div className="lg:h-[50px] md:h-[200px] h-[150px] w-[1px] flex self-center bg-bluePrimary" />

            <a href={constants.mailToLink}>
              <MyEmail />
            </a>

            <div className="lg:h-[50px] md:h-[200px] h-[136px] w-[1px] flex self-center bg-bluePrimary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
