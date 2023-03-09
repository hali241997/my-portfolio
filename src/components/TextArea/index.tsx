import clsx from "clsx";
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    "className"
  > {
  classes?: string;
  errorText?: string;
}

const TextArea: FC<TextAreaProps> = ({ classes, errorText, ...props }) => {
  return (
    <div className="flex flex-col">
      <textarea
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

export default TextArea;
