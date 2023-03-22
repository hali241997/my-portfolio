import clsx from "clsx";
import Android from "icons/Android";
import Exit from "icons/Exit";
import Ios from "icons/Ios";
import { FC } from "react";
import projectStyles from "./project.module.css";

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
    <div
      key={description}
      className={clsx("flex reveal", {
        "flex-row": isEven,
        "flex-row-reverse": !isEven,
      })}
    >
      <a
        href={link ?? ""}
        target="_blank"
        className={clsx(
          "flex flex-1 hover:cursor-pointer relative",
          {
            "hover:cursor-default": !link,
          },
          projectStyles.projectImage
        )}
      >
        <img
          src={imagePath}
          alt="product image"
          className="object-cover rounded"
        />
      </a>

      <div
        className={clsx("z-10 flex flex-col justify-center flex-1 space-y-4", {
          "items-end": isEven,
          "items-start": !isEven,
        })}
      >
        <div className="flex items-center space-x-4">
          <div className="md:text-[26px] text-[16px] font-RobotoMono">
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

        <div className="flex space-x-4 text-[15px] font-RobotoMono">
          {tags.map((tag) => (
            <div key={tag} className="text-center">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
