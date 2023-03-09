import Button from "components/Button";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="flex flex-col mt-[20px] lg:flex-row-reverse lg:mx-[100px]">
      <div className="self-center lg:flex lg:flex-1 lg:justify-end">
        <img
          src="/images/hero.png"
          alt="hero"
          className="object-cover h-[600px]"
        />
      </div>

      <div className="mt-[20px] lg:mt-0 lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:mr-[20px]">
        <div className="font-bold text-center lg:text-left font-ShipporiMincho text-[20px] md:text-[46px]">
          Designing and developing{" "}
          <span className="underline decoration-bluePrimary">Mobile</span> and{" "}
          <span className="underline decoration-bluePrimary">Web</span>{" "}
          solutions that work for you
        </div>

        <div className="flex justify-center lg:justify-start mt-[20px]">
          <Button>See the Glory</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
