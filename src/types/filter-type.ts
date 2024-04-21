import React from "react";

export type FilterValue = {
  value: string | number | boolean;
  label: string | number | React.ReactElement;
};
export type FilterSection = {
  name: string;
  field: string;
  values: FilterValue[];
};
