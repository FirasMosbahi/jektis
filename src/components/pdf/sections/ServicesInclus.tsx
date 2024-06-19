import { Text, View } from "@react-pdf/renderer";
import TitleWithListContent from "@jektis/components/pdf/common/ListWithTitle";
import React from "react";
import Tablesection from "@jektis/components/pdf/common/Section";

export default function ServicesInclus({
  vip,
  standard,
}: {
  vip: string[];
  standard: string[];
}) {
  return (
    <Tablesection title="Services Inclus">
      <TitleWithListContent title="Pack Standard :" content={standard} />
      <TitleWithListContent title="Pack VIP :" content={vip} />
    </Tablesection>
  );
}
