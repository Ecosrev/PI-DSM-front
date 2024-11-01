import { validatorMessage } from "@/constants/validatorMessage";
import * as Yup from "yup";

export const BeneficioEditValidator = () => {
  const { requiredField, numericField, minValue, minLength, maxLength } =
    validatorMessage;
  return Yup.object().shape({
    name: Yup.string()
      .required(requiredField)
      .min(3, minLength)
      .max(100, maxLength),
    adress: Yup.string().required(requiredField).max(200),
    points: Yup.number()
      .typeError(numericField)
      .min(0.01, minValue)
      .required(requiredField),
    qtd: Yup.number().typeError(numericField).min(0.01, minValue),
  });
};
