import * as yup from "yup";

export type HomeFilterFormData = {
  nom?: string;
  arrive?: Date;
  depart?: Date;
  chambres?: string;
};

export type AllezReourVolFormData = {
  depart?: string;
  destination?: string;
  dateDepart?: Date;
  dateRetour?: Date;
  nombreAdultes?: number;
  nombreEnfants?: number;
  nombreBebe?: number;
  classe?: string;
};

export type SimpleAllezVolFormData = {
  depart?: string;
  destination?: string;
  dateDepart?: Date;
  nombreAdultes?: number;
  nombreEnfants?: number;
  nombreBebe?: number;
  classe?: string;
};

export type MultiDestinationsVolFormData = {
  depart?: string;
  destination?: string;
  dateDepart?: Date;
  nombreAdultes?: number;
  nombreEnfants?: number;
  nombreBebe?: number;
  classe?: string;
};

export type VoyageFormData = {
  destination?: string;
  date?: Date;
  duree?: number;
  budget?: number;
  visa?: string;
};
