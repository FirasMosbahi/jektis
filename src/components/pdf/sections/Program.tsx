import { Text, View } from "@react-pdf/renderer";
import React from "react";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({});

export default function ProgramDaySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <View style={tw("flex flex-col items-start mb-1 font-[500]")}>
      <Text style={tw("text-[#0050A5] text-[14px]")}>{title}</Text>
      <Text style={tw("text-black text-[8px]")}>{content}</Text>
    </View>
  );
}
