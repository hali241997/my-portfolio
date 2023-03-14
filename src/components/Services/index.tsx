import Service from "components/Service";
import { FC, useMemo } from "react";

const Services: FC = () => {
  const myServices = useMemo(
    () => [
      {
        category: "Web Development",
        description:
          "Looking for a stunning, responsive, and user-friendly website that reflects your business? I offer personalized web development services tailored to your needs. With years of experience and the latest web technologies, I deliver high-quality results for simple websites and complex web applications. Contact me to start building the website you've always wanted!",
      },
      {
        category: "Mobile App Development",
        description:
          "Need a custom mobile app for your business? I offer personalized app development services for both iOS and Android platforms. With years of experience and the latest technologies, I create secure, user-friendly, and visually stunning apps that meet your unique needs. Contact me to start building the app of your dreams!",
      },
      {
        category: "Front-end Development",
        description:
          "Want to enhance your website's look and feel? I offer personalized front-end development services using the latest technologies like ReactJS and NextJS to create responsive and visually appealing websites that are easy to navigate. From complete redesigns to minor tweaks, I deliver high-quality results that focus on user experience, accessibility, and performance. Contact me to start improving your website today!",
      },
      {
        category: "Back-end Development",
        description:
          "Need a robust and scalable web application? I offer personalized back-end development services using the latest technologies like Node.js, Express, and NestJS to handle complex data processing and user authentication. Whether you need a custom CMS, e-commerce platform, or social network, I deliver exceptional results with a focus on performance, scalability, and security. Contact me to start building your next web app today!",
      },
      {
        category: "Testing and Debugging",
        description:
          "Experiencing issues with your website or web app? I offer customized testing and debugging services to identify and resolve performance, user experience, and security issues. With extensive knowledge of front-end and back-end development and a variety of testing tools and methodologies, I guarantee exceptional results. Contact me to enhance your website or web app today!",
      },
      {
        category: "Deployment and Maintenance",
        description:
          "Worried about your website or web app running smoothly? I offer customized deployment and maintenance services using the latest tools and methodologies to ensure seamless performance. As a full-stack developer, I provide ongoing maintenance and support to keep your site secure and up-to-date. Contact me to learn more and ensure your site is always running smoothly.",
      },
    ],
    []
  );

  return (
    <div className="lg:mx-[100px] mt-[80px]">
      <div className="font-bold text-center text-[40px] mb-[20px]">
        Services
      </div>

      <div className="text-justify md:text-[25px] text-[16px] text-white lg:mx-[124px] mb-[20px]">
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
