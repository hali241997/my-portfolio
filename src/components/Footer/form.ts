import { object, string } from "yup";
import { FormValues } from "./types";

export const formInitialValues: FormValues = {
  email: "",
  subject: "",
  message: "",
};

export const formValidationSchema = object().shape({
  email: string()
    .trim()
    .email("Please enter correct email")
    .required("Please enter an email address"),
  subject: string().trim(),
  message: string().trim().required("Please enter your message"),
});
