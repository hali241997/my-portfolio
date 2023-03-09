import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement,
  ReactNode,
} from "react";

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "className"
  > {
  classes?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`uppercase border px-[20px] py-[10px] tracking-[2px] border-bluePrimary md:text-[28px] md:px-[40px] lg:text-[16px] lg:px-[20px] lg:py-[10px] ${props.classes}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
