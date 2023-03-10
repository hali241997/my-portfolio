import Button from "components/Button";
import Input from "components/Input";
import TextArea from "components/TextArea";
import { useFormik } from "formik";
import useBreakpoint from "hooks/useBreakpoint";
import Github from "icons/Github";
import Gmail from "icons/Gmail";
import LinkedIn from "icons/LinkedIn";
import Whatsapp from "icons/Whatsapp";
import { FC } from "react";
import { showFieldError } from "utils/form";
import { formInitialValues, formValidationSchema } from "./form";
import { FormValues } from "./types";

const Footer: FC = () => {
  const breakpoint = useBreakpoint();

  const handleSubmit = (values: FormValues) => {
    window.open(
      `mailto:mhali241997@gmail.com?subject=${values.subject}&body=${values.message}`,
      "_blank"
    );
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <div className="border-b mt-[40px] lg:flex lg:px-[100px] lg:py-[100px]">
        <div className="flex flex-col flex-1 mb-[20px] lg:mb-">
          <div className="uppercase text-[20px] mb-[20px]">Drop a line</div>

          <div className="flex flex-col justify-center flex-1 space-y-10">
            <Input
              name="subject"
              placeholder="Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextArea
              name="message"
              placeholder="Message"
              value={formik.values.message}
              errorText={showFieldError(
                formik.touched.message,
                formik.errors.message
              )}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="flex justify-end">
              <Button type="submit" onClick={() => formik.handleSubmit()}>
                Send Message
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 lg:pl-[200px]">
          <div className="uppercase text-[20px] mb-[20px] text-center lg:text-left">
            Contact Me
          </div>

          <div className="md:flex md:mb-[30px] lg:mb-0 lg:block">
            <div className="flex flex-col items-center justify-center flex-1 mb-10 space-y-2 md:mb-0 lg:items-start lg:justify-start lg:mb-10">
              <a className="block" href="tel:+923217738854" target="_blank">
                +92 321 7738854
              </a>

              <a
                className="block"
                href="mailto:+mhali241997@gmail.com"
                target="_blank"
              >
                mhali241997@gmail.com
              </a>

              <a
                className="block"
                href="https://goo.gl/maps/yavFijZVUqAjUsck6"
                target="_blank"
              >
                Islamabad, Pakistan
              </a>
            </div>

            <div className="flex items-center justify-center flex-1 mb-10 lg:block md:mb-0">
              <div className="grid grid-cols-2 gap-8">
                <a
                  href="https://www.linkedin.com/in/m-hasnain-ali/"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <LinkedIn
                    width={
                      breakpoint === "lg" || breakpoint === "xl" ? "80" : "60"
                    }
                  />
                </a>

                <a
                  href="https://github.com/hali241997"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Github
                    width={
                      breakpoint === "lg" || breakpoint === "xl" ? "80" : "60"
                    }
                  />
                </a>

                <a
                  href="https://wa.me/923217738854"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Whatsapp
                    width={
                      breakpoint === "lg" || breakpoint === "xl" ? "80" : "60"
                    }
                  />
                </a>
                <a
                  href="mailto:+mhali241997@gmail.com"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Gmail
                    width={
                      breakpoint === "lg" || breakpoint === "xl" ? "80" : "60"
                    }
                    height={
                      breakpoint === "lg" || breakpoint === "xl" ? "80" : "60"
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center py-5 space-y-5 text-center md:space-y-0 md:space-x-5 md:flex-row">
        <div className="font-bold text-[15px]">@Copyright 2022</div>
        <div className="text-[15px]">Hasnain Ali</div>
        <div className="text-[15px]">All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
