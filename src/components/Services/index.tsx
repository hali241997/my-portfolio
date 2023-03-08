import Service from "components/Service";
import { FC, useMemo } from "react";

const Services: FC = () => {
  const myServices = useMemo(
    () => [
      {
        category: "Web Development",
        description:
          "Are you looking for a professional website for your business but don't have the resources or time to build it yourself? Look no further! I offer personalized web development services that meets your unique needs. With years of experience, I have the skills and expertise to create custom websites that are visually stunning, responsive, and user-friendly while using the latest web technologies and frameworks to ensure that your website is up-to-date and secure. Whether you need a simple website or a complex web application, I can deliver high-quality results that meet your expectations. Contact me today to learn more about my web development service and start building the website you've always wanted!",
      },
      {
        category: "Mobile App Development",
        description:
          "In today's mobile-first world, having a great mobile app is essential to the success of your business. I offer personalized mobile app development services that can help you bring your app idea to life. With extensive experience in mobile app development, I can create custom apps for both iOS and Android platforms while using the latest technologies and frameworks to ensure that your app is secure, user-friendly, and visually stunning. I will work closely with you to understand your app's purpose and target audience to create an app that meets your unique needs. Whether you need a simple informational app or a complex enterprise-level app, I have the expertise to deliver exceptional results. Contact me today to learn more about my mobile app development services and start building the app of your dreams!",
      },
      {
        category: "Front-end Development",
        description:
          "Are you looking to improve your website's user interface and user experience? Look no further than our front-end development service! I offer personalized front-end development services that can transform your website's look and feel. I use the latest front-end technologies such as ReactJS and NextJS to create responsive and visually appealing websites that are easy to use and navigate. Whether you need a complete redesign of your website or just some minor tweaks, I have the expertise to deliver high-quality results. With a focus on user experience, accessibility, and performance, I'll create a website that not only looks great but also delivers results for your business. Contact me today to learn more about my front-end development service and start improving your website's user experience!",
      },
      {
        category: "Back-end Development",
        description:
          "I offer personalized back-end development services that can help you build a robust and scalable web application. I have the expertise to handle complex data processing and user authentication using the latest back-end technologies such as Node.js, Express, and NestJS. Whether you need to build a custom content management system, an e-commerce platform, or a social media network, I can deliver exceptional results while operating solo. With a focus on performance, scalability, and security, I'll create a web application that not only meets your requirements but also exceeds your expectations. Contact me today to learn more about my back-end development service and start building your next web application with a trusted and reliable developer!",
      },
      {
        category: "Testing and Debugging",
        description:
          "I provide customized testing and debugging services to assist you in recognizing and resolving any problems that may be present in your website or web application. My extensive knowledge of both front-end and back-end development allows me to efficiently address issues concerning performance, user experience, and security. By utilizing a variety of testing tools and methodologies, I guarantee that your website or web application will be extensively tested and optimized for all major devices and browsers. Whether you are dealing with problems associated with website speed, broken links, or server errors, I have the necessary expertise to produce exceptional outcomes. Get in touch with me now to obtain more information about my testing and debugging service and begin enhancing your website or web application with the assistance of a dependable and trustworthy developer.",
      },
      {
        category: "Deployment and Maintenance",
        description:
          "For those seeking to guarantee their website or web application runs seamlessly all the time, I offer customized deployment and maintenance services. As a full-stack developer, I implement the most recent deployment tools and methodologies to ensure your website or web application is deployed smoothly and efficiently, allowing you to save time and resources. I also offer ongoing maintenance and support to ensure that your website or web application remains secure and up-to-date. Whether you need to deploy a new website or web application or maintain an existing one, I have the expertise to deliver exceptional results. Contact me today to learn more about my deployment and maintenance services and ensure your website or web application is always running smoothly with the help of a skilled and experienced developer.",
      },
    ],
    []
  );

  return (
    <div className="lg:mx-[100px] mt-[80px]">
      <div className="font-bold text-center text-[40px] mb-[20px]">
        Services
      </div>

      <div className="text-justify md:text-[25px] text-[16px] dark:text-white text-paragraph lg:mx-[124px] mb-[20px]">
        As a full-stack developer, I have complete control, enabling me to
        efficiently and effectively create sophisticated web and mobile
        applications with ease.
      </div>

      <div className="grid-cols-2 grid-rows-2 gap-10 lg:grid">
        {myServices.map((service) => {
          return <Service key={service.category} {...service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
