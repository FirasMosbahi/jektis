import React from "react";

export type FilterValue = {
  value: string | number;
  label: string | number | React.ReactElement;
};
export type FilterSection = {
  name: string;
  values: FilterValue[];
};
