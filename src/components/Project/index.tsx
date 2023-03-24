import clsx from "clsx";
import Android from "icons/Android";
import Exit from "icons/Exit";
import Ios from "icons/Ios";
import { FC } from "react";

export interface ProjectProps {
  isEven: boolean;
  link?: string;
  imagePath: string;
  projectName: string;
  description: string;
  tags: string[];
  androidLink?: string;
  iosLink?: string;
}

const Project: FC<ProjectProps> = ({
  isEven,
  link,
  imagePath,
  projectName,
  description,
  tags,
  androidLink,
  iosLink,
}) => {
  return (
    <div className="reveal">
      <div
        key={description}
        className={clsx("lg:flex hidden", {
          "flex-row": isEven,
          "flex-row-reverse": !isEven,
        })}
      >
        <a
          href={link ?? ""}
          target="_blank"
          className={clsx("flex flex-1 hover:cursor-pointer relative", {
            "hover:cursor-default": !link,
          })}
        >
          <img
            src={imagePath}
            alt="product image"
            className="object-cover rounded"
          />
        </a>

        <div
          className={clsx(
            "z-10 flex flex-col justify-center flex-1 space-y-4",
            {
              "items-end": isEven,
              "items-start": !isEven,
            }
          )}
        >
          <div className="flex items-center space-x-4">
            <div className="text-[26px] font-RobotoMono font-bold">
              {projectName}
            </div>

            {link && (
              <a href={link} target="_blank">
                <Exit />
              </a>
            )}

            {androidLink && (
              <a href={androidLink} target="_blank">
                <Android />
              </a>
            )}

            {iosLink && (
              <a href={iosLink} target="_blank" className="mb-1">
                <Ios />
              </a>
            )}
          </div>

          <div
            className={clsx(
              "p-6 rounded bg-[rgba(25,78,251,0.7)] font-RobotoMono text-[15px]",
              {
                "text-right -ml-[60px]": isEven,
                "text-left -mr-[60px]": !isEven,
              }
            )}
          >
            {description}
          </div>

          <div className="flex space-x-4 text-[14px] font-RobotoMono">
            {tags.map((tag) => (
              <div key={tag} className="text-center">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:h-[400px] h-[200px] flex items-center relative lg:hidden">
        <img
          src={imagePath}
          alt="product image"
          className="absolute -z-10 md:h-[400px] h-[200px] object-contain opacity-20"
        />

        <div className="px-2 md:px-6">
          <div className="flex items-center mb-3 space-x-4 md:mb-10">
            <div className="md:text-[20px] text-[12px] font-bold font-RobotoMono">
              {projectName}
            </div>

            {link && (
              <a href={link} target="_blank">
                <Exit />
              </a>
            )}

            {androidLink && (
              <a href={androidLink} target="_blank">
                <Android />
              </a>
            )}

            {iosLink && (
              <a href={iosLink} target="_blank" className="mb-[0.5px]">
                <Ios />
              </a>
            )}
          </div>

          <div className="md:text-[15px] text-[10px] font-RobotoMono md:mb-10 mb-3 text-[#dbdbdb]">
            {description}
          </div>

          <div className="flex space-x-4 md:text-[14px] text-[10px] font-RobotoMono flex-wrap">
            {tags.map((tag) => (
              <div key={tag} className="mb-2 text-center text-[#dbdbdb]">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
