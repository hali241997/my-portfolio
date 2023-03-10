import { FC } from "react";
import { default as QuoteSvg } from "icons/Quote";

const Quote: FC = () => {
  return (
    <div className="py-[calc(10vh)] lg:py-[calc(25vh)] flex flex-col items-center">
      <div className="mb-[70px] lg:mb-[40px]">
        <QuoteSvg />
      </div>

      <div className="text-[30px] md:text-[40px] mb-[20px] italic text-center dark:text-white text-quote">
        &quot;The best way to predict the future is to invent it.&quot;
      </div>

      <div className="text-[20px] md:text-[30px] font-extrabold">
        - Alan Kay -
      </div>
    </div>
  );
};

export default Quote;
