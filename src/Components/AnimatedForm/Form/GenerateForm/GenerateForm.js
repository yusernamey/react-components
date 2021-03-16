import { formData } from "../FormInputs";
import {
  input,
  error,
  label,
  submit,
  customInput1,
  select1,
  select2,
} from "./GenerationFunctions";
export const GenerateForm = ({ register, errors }) =>
  formData.map((formElement) => {
    let element = formElement.element;
    let id = formElement.id;
    if (element === "input") return input(formElement, register);
    if (element === "error") return error(formElement, errors);
    if (element === "label") return label(formElement);
    if (element === "submit") return submit(formElement);
    if (element === "input" && id === "9")
      return customInput1(formElement, register);
    if (element === "select" && id === "6")
      return select1(formElement, register);
    if (element === "select" && id === "11")
      return select2(formElement, register);
    return null;
  });
