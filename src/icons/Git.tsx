import { FC } from "react";
import { IconProps } from "./types";

const Git: FC<IconProps> = ({ width }) => {
  return (
    <svg fill="none" width={width} viewBox="0 0 128 128">
      <g clipPath="url(#a)">
        <path
          fill="#FFF"
          d="M6.721 54.723 54.367 7.078l54.437 54.437-47.646 47.645z"
        />
        <path
          d="M124.74 58.378 69.624 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.683 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.675 9.675 0 0 1-15.788-10.521L68.577 47.933l-.002 34.341a9.707 9.707 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 0 1 3.167-2.11V47.333a9.581 9.581 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.059 20.333 3.267 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.133 8.133 0 0 0-.001-11.501z"
          fill="#F34F29"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h128v128H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Git;
