import { object, string } from "yup";
import { FormValues } from "./types";

export const formInitialValues: FormValues = {
  subject: "",
  message: "",
};

export const formValidationSchema = object().shape({
  subject: string().trim(),
  message: string().trim().required("Please enter your message"),
});
