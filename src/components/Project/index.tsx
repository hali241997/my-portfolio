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
  role?: string;
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
  role,
  description,
  tags,
  androidLink,
  iosLink,
}) => {
  const imageWrapperClassName = clsx(
    "absolute inset-0 -z-10 flex items-center justify-center",
    "lg:static lg:z-auto lg:flex-1 lg:min-h-[280px] lg:p-4 lg:rounded lg:bg-[rgba(25,78,251,0.08)]",
    link && "pointer-events-none lg:pointer-events-auto lg:hover:cursor-pointer"
  );

  const imageClassName = clsx(
    "object-contain w-full rounded",
    "h-[200px] md:h-[400px] opacity-20",
    "lg:h-full lg:opacity-100"
  );

  const image = (
    <img
      src={imagePath}
      alt={`${projectName} screenshot`}
      className={imageClassName}
    />
  );

  return (
    <div
      className={clsx(
        "reveal relative flex items-center min-h-[200px] md:min-h-[400px] lg:min-h-0 lg:flex",
        {
          "lg:flex-row": isEven,
          "lg:flex-row-reverse": !isEven,
        }
      )}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={imageWrapperClassName}
        >
          {image}
        </a>
      ) : (
        <div className={imageWrapperClassName}>{image}</div>
      )}

      <div
        className={clsx(
          "relative z-10 flex flex-col flex-1 space-y-3 md:space-y-4",
          "px-2 md:px-6 lg:px-0 lg:justify-center",
          {
            "lg:items-end": isEven,
            "lg:items-start": !isEven,
          }
        )}
      >
        <div className="flex items-center space-x-4 mb-3 md:mb-10 lg:mb-0">
          <div>
            <div className="text-[12px] md:text-[20px] lg:text-[26px] font-RobotoMono font-bold">
              {projectName}
            </div>
            {role && (
              <div className="text-[10px] md:text-[12px] lg:text-[14px] text-gray-400 font-RobotoMono">
                {role}
              </div>
            )}
          </div>

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Exit />
            </a>
          )}

          {androidLink && (
            <a
              href={androidLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Android />
            </a>
          )}

          {iosLink && (
            <a
              href={iosLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[0.5px] lg:mb-1"
            >
              <Ios />
            </a>
          )}
        </div>

        <div
          className={clsx(
            "font-RobotoMono mb-3 md:mb-10 lg:mb-0",
            "text-[10px] md:text-[15px] lg:text-[15px]",
            "text-[#dbdbdb] lg:text-inherit",
            "lg:p-6 lg:rounded lg:bg-[rgba(25,78,251,0.7)]",
            {
              "lg:text-right lg:-ml-[60px]": isEven,
              "lg:text-left lg:-mr-[60px]": !isEven,
            }
          )}
        >
          {description}
        </div>

        <div
          className={clsx(
            "flex flex-wrap gap-x-4 gap-y-2 font-RobotoMono",
            "text-[10px] md:text-[14px]",
            "text-[#dbdbdb] lg:text-inherit"
          )}
        >
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
