import Button from "components/Button";
import Input from "components/Input";
import TextArea from "components/TextArea";
import { useFormik } from "formik";
import Github from "icons/Github";
import Gmail from "icons/Gmail";
import LinkedIn from "icons/LinkedIn";
import Whatsapp from "icons/Whatsapp";
import { FC } from "react";
import { showFieldError } from "utils/form";
import { formInitialValues, formValidationSchema } from "./form";
import { FormValues } from "./types";

const Footer: FC = () => {
  const handleSubmit = (values: FormValues) => {
    window.open(
      `mailto:${values.email}?subject=${values.subject}&body=${values.message}`,
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
        <div className="flex flex-col flex-1">
          <div className="uppercase text-[20px] mb-[20px]">Drop a line</div>

          <div className="flex flex-col space-y-10">
            <Input
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              errorText={showFieldError(
                formik.touched.email,
                formik.errors.email
              )}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

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
          <div className="uppercase text-[20px] mb-[20px]">Contact Me</div>

          <div className="mb-10 space-y-2">
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

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-[30px] lg:mb-0">
            <a
              href="https://www.linkedin.com/in/m-hasnain-ali/"
              target="_blank"
              className="flex flex-col items-center"
            >
              <LinkedIn />
            </a>

            <a
              href="https://github.com/hali241997"
              target="_blank"
              className="flex flex-col items-center"
            >
              <Github width="80" />
            </a>

            <a
              href="https://wa.me/923217738854"
              target="_blank"
              className="flex flex-col items-center"
            >
              <Whatsapp />
            </a>
            <a
              href="mailto:+mhali241997@gmail.com"
              target="_blank"
              className="flex flex-col items-center"
            >
              <Gmail />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center py-5 space-y-5 text-center md:space-y-0 md:space-x-5 md:flex-row">
        <div>@ Copyright 2022</div>
        <div>hali241997</div>
        <div>All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
