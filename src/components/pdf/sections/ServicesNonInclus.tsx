import { Text, View } from "@react-pdf/renderer";
import React from "react";
import { createTw } from "react-pdf-tailwind";
import Tablesection from "@jektis/components/pdf/common/Section";

const tw = createTw({});

export default function ServicesNonInclus({ data }: { data: string[] }) {
  return (
    <Tablesection title="Services non inclus">
      <View
        style={tw("flex flex-col justify-start items-start w-full gap-0.5")}
      >
        {data.map((service, index) => (
          <Text style={tw("text-start text-[8px] w-full")} key={index}>
            - {service}
          </Text>
        ))}
      </View>
    </Tablesection>
  );
}
