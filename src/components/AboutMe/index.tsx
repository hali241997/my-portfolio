import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="lg:px-[140px] md:px-[40px] px-[20px] py-[60px]">
      <div className="font-SourceCodePro md:text-[26px] text-[20px] font-[800] mb-[20px]">
        {`<a little about me>`}
      </div>

      <div className="font-RobotoMono md:text-[20px] text-[16px]">
        I&apos;ve been sailing the web and mobile development seas ever since my
        student years more than 5 years ago. I&apos;ve been creating everything
        from regular websites and dashboards, all the way to complex mobile
        applications and open-source libraries.
        <br />
        <br />
        The main characteristic of my work one could give for all my these years
        has been simple:
        <br />
        <br />
        <span className="text-bluePrimary md:text-[26px] text-[20px] font-[800]">
          Get 💩 done. Fast.
        </span>
        <br />
        <br />I have a proven ability to write clean and modern JS/TS code with
        a strict code style, and at a fast pace. My expertise in web development
        ranges from the early days of jQuery, PHP, and plain CSS, to the current
        React.js/Next.js and NestJS frameworks. By utilizing these technologies
        appropriately, I strive to create applications that are simplified,
        maintainable, and accessible.
        <br />
        <br />
      </div>

      <div className="font-SourceCodePro md:text-[26px] text-[20px] font-[800] text-right">
        {`</a little about me>`}
      </div>
    </div>
  );
};

export default AboutMe;
