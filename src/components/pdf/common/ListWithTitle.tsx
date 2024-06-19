import { Text, View } from "@react-pdf/renderer";
import React from "react";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({});

export default function TitleWithListContent({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <View style={tw("flex flex-col gap-1 pt-1 items-start")}>
      <Text style={tw("text-[12px] font-[500]")}>{title}</Text>
      <View
        style={tw("flex flex-col justify-start items-start w-full gap-0.5")}
      >
        {content.map((contentItem, index) => (
          <Text style={tw("text-start text-[8px] w-full")} key={index}>
            - {contentItem}
          </Text>
        ))}
      </View>
    </View>
  );
}
