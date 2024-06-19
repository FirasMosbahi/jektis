import { createTw } from "react-pdf-tailwind";
import React from "react";
import { Text, View } from "@react-pdf/renderer";

const tw = createTw({});

export default function Tablesection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={tw("flex flex-col my-2")}>
      <Text style={tw("pb-2 text-[14px] text-[#0050A5]")}>{title}</Text>
      {children}
    </View>
  );
}
