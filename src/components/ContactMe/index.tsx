import Button from "components/Button";
import Input from "components/Input";
import TextArea from "components/TextArea";
import { useFormik } from "formik";
import { FC } from "react";
import { showFieldError } from "utils/form";
import { formInitialValues, formValidationSchema } from "./form";
import { FormValues } from "./types";

const ContactMe: FC = () => {
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
    <div className="reveal">
      <div className="md:py-[60px] py-[40px] px-[20px] md:px-[40px]">
        <div className="font-bold font-SourceCodePro lg:text-[36px] md:text-[26px] text-[20px] mb-[40px]">
          <span className="text-bluePrimary">04.</span> {"<contact me>"}
        </div>

        <div className="lg:px-[50px] mb-10 font-RobotoMono">
          Feel free to drop me a message
        </div>

        <div className="flex flex-col flex-1 space-y-5 lg:mx-[100px]">
          <Input
            name="subject"
            placeholder="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classes="rounded"
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
            classes="min-h-[200px] rounded"
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              classes="normal-case"
              onClick={() => formik.handleSubmit()}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
