import * as yup from "yup";
import { removeEmptyStrings } from "@jektis/utils/transform-empty-to-undefined";

export const hotelSearchValidationSchema = yup
  .object()
  .transform(removeEmptyStrings)
  .shape({
    location: yup.string().optional(),
    arrive: yup.date().optional(),
    depart: yup.date().optional(),
    reservation: yup.string().optional(),
  });

export const hotelSideFilterValidationSchema = yup
  .object()
  .transform(removeEmptyStrings)
  .shape({
    nom: yup.string().optional(),
    rating: yup.number().optional(),
    arrangement: yup.string().optional(),
    theme: yup.string().optional(),
  });
