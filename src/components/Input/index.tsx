import clsx from "clsx";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "className"
  > {
  classes?: string;
  errorText?: string;
}

const Input: FC<InputProps> = ({ classes, errorText, ...props }) => {
  return (
    <div className="flex flex-col">
      <input
        className={clsx(
          "p-2 bg-transparent outline-0",
          {
            "border border-red-400": errorText?.trim(),
            "border border-bluePrimary": !errorText?.trim(),
          },
          classes
        )}
        {...props}
      />

      {errorText?.trim() && (
        <div className="text-[12px] text-red-400 mt-[8px]">
          {errorText.trim()}
        </div>
      )}
    </div>
  );
};

export default Input;
