import React from "react";

export type FilterValue = {
  value: string | number | boolean;
  label: string | number | React.ReactElement;
};
export type FilterSection = {
  name: string;
  values: FilterValue[];
};
