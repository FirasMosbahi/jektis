"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { ProgramDay } from "@jektis/types";
import { createTw } from "react-pdf-tailwind";

// Create styles
const tw = createTw({});

function ProgramDaySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <View style={tw("flex flex-col items-start mt-1 mb-4 font-[700]")}>
      <Text style={tw("text-[#0050A5] text-[18px]")}>{title}</Text>
      <Text style={tw("text-black text-[12px]")}>{content}</Text>
    </View>
  );
}

// Create Document Component
export default function ProgramPDF({ programme }: { programme: ProgramDay[] }) {
  return (
    <Document>
      <Page style={tw("px-4 py-8")}>
        <View style={tw("flex flex-row justify-center")}>
          <Text style={tw("text-[#1b53a1] text-3xl ")}>PROGRAMME</Text>
        </View>
        <View>
          {programme.map((programDay, index) => (
            <ProgramDaySection
              key={index}
              title={programDay.title}
              content={programDay.content}
            />
          ))}
        </View>
      </Page>
    </Document>
  );
}
