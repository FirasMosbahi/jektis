import { Tarif } from "@jektis/types";
import { Text, View } from "@react-pdf/renderer";
import TitleWithListContent from "@jektis/components/pdf/common/ListWithTitle";
import React from "react";
import { createTw } from "react-pdf-tailwind";
import Tablesection from "@jektis/components/pdf/common/Section";

const tw = createTw({});

export default function TarifsPDF({ tarifs }: { tarifs: Tarif }) {
  return (
    <Tablesection title="Tarifs">
      <View style={tw("flex flex-row gap-2")}>
        <Text style={tw("text-[10px]")}>Date de voyage :</Text>
        <Text style={tw("text-[10px]")}>
          {tarifs.dateDeVoyage.toDateString()}
        </Text>
      </View>
      <TitleWithListContent title="Tarifs" content={tarifs.tarifs} />
      <TitleWithListContent title="Conditions" content={tarifs.conditions} />
    </Tablesection>
  );
}
