import * as yup from "yup";
import {
  removeEmptyStrings,
  TransformEmptyToUndefined,
} from "@jektis/utils/transform-empty-to-undefined";

export const hotelsValidationSchema = yup.object().shape({
  nom: yup
    .string()
    .transform(TransformEmptyToUndefined)
    .optional()
    .min(1)
    .max(255),
  arrive: yup.date().optional(),
  depart: yup.date().optional(),
  chambres: yup
    .array(
      yup.object().shape({
        adultes: yup.number().required().min(0).default(0),
        enfants: yup
          .array(
            yup
              .object()
              .required()
              .shape({
                age: yup.number().required().min(2).max(11).default(11),
              }),
          )
          .default([]),
        bebe: yup.number().required().min(0).default(0),
      }),
    )
    .default([]),
});

export const AllezReourVolFormValidationSchema = yup.object().shape({
  depart: yup.string().transform(TransformEmptyToUndefined).optional(),
  destination: yup
    .string()
    .transform(TransformEmptyToUndefined)
    .transform(TransformEmptyToUndefined)
    .optional(),
  dateDepart: yup.date().transform(TransformEmptyToUndefined).optional(),
  dateRetour: yup.date().transform(TransformEmptyToUndefined).optional(),
  nombreAdultes: yup
    .number()
    .transform(TransformEmptyToUndefined)
    .default(0)
    .min(1),
  nombreEnfants: yup
    .number()
    .transform(TransformEmptyToUndefined)
    .default(0)
    .min(0),
  nombreBebe: yup
    .number()
    .transform(TransformEmptyToUndefined)
    .default(0)
    .min(0),
  classe: yup.string().transform(TransformEmptyToUndefined).optional(),
});

export const SimpleAllezVolFormValidationSchema = yup
  .object()
  .transform(removeEmptyStrings)
  .shape({
    depart: yup.string().optional(),
    destination: yup.string().optional(),
    dateDepart: yup.date().optional(),
    nombreAdultes: yup.number().default(0).min(1),
    nombreEnfants: yup.number().default(0).min(0),
    nombreBebe: yup.number().default(0).min(0),
    classe: yup.string().optional(),
  })
  .test(
    "passengerCount",
    "Total passengers must be less than 4",
    function (value) {
      const { nombreAdultes, nombreEnfants, nombreBebe } = value;
      return nombreAdultes + nombreEnfants + nombreBebe <= 4;
    },
  );

export const MultiDestinationsVolFormValidationSchema = yup
  .object()
  .transform(removeEmptyStrings)
  .shape({
    depart: yup.string().optional(),
    destination: yup.string().optional(),
    dateDepart: yup.date().optional(),
    nombreAdultes: yup.number().default(0).min(1),
    nombreEnfants: yup.number().default(0).min(0),
    nombreBebe: yup.number().default(0).min(0),
    classe: yup.string().optional(),
  });

export const VoyageFormValidationSchema = yup
  .object()
  .transform(removeEmptyStrings)
  .shape({
    destination: yup.string().optional(),
    date: yup.date().optional(),
    duree: yup.number().optional().min(0),
    budget: yup.number().optional().min(0),
    visa: yup.string().optional(),
  });
