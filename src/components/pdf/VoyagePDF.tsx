"use client";

import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Image,
  Text,
} from "@react-pdf/renderer";
import { VoyageDetailsProps } from "@jektis/types";
import { createTw } from "react-pdf-tailwind";
import ProgramDaySection from "@jektis/components/pdf/sections/Program";
import TarifsPDF from "@jektis/components/pdf/sections/Tarifs";
import ServicesNonInclus from "@jektis/components/pdf/sections/ServicesNonInclus";
import ServicesInclus from "@jektis/components/pdf/sections/ServicesInclus";

// Create styles
const tw = createTw({});

const styles = StyleSheet.create({
  tableContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tableSection: {
    width: "40%",
    padding: 10,
    textAlign: "left",
    fontSize: 12,
    border: "1px solid #ddd", // Add border style
  },
  tableLabel: {
    width: "100%",
    padding: 5,
    textAlign: "left",
    fontSize: 10,
    border: "1px solid #ddd", // Add border style
  },
});

function Table({ data }: { data: VoyageDetailsProps }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableSection}>
        {data.program.map((day) => (
          <ProgramDaySection
            key={day.title}
            title={day.title}
            content={day.content}
          />
        ))}
      </View>
      <View style={styles.tableSection}>
        <TarifsPDF tarifs={data.tarif} />
        <ServicesInclus
          vip={data.servicesInclus.vip}
          standard={data.servicesInclus.standard}
        />
        <ServicesNonInclus data={data.servicesNonInclus} />
      </View>
    </View>
  );
}

export default function VoyagePDF({ data }: { data: VoyageDetailsProps }) {
  return (
    <Document>
      <Page size="A4">
        <View style={tw("flex flex-col items-center mt-[8px]")}>
          <Image
            src="/logo_footer.png"
            style={tw("w-[200px] h-[50px] mb-[12px]")}
          />
          <View
            style={tw(
              "flex flex-col items-center mt-[8px] bg-[#254EA2] relative",
            )}
          >
            <Text style={tw("absolute bottom-0")}>Voyage {data.name}</Text>
            <Text style={tw("absolute top-0 bg-[#63BC4F]")}>
              Du {data.startDate.toLocaleDateString()} au{" "}
              {data.endDate.toLocaleDateString()}
            </Text>
          </View>
          <View style={tw("flex flex-col gap-1 w-[80%] mt-[20px]")}>
            <Text>Chargé de voyage :</Text>
            <View style={tw("flex flex-col gap-0.5 text-[12px]")}>
              <Text>Nom {data.chargeeDeVoyage.nom} </Text>
              <Text>email : {data.chargeeDeVoyage.email} </Text>
              <Text>telephone : {data.chargeeDeVoyage.telephone} </Text>
              <Text>whatsApp : {data.chargeeDeVoyage.whatsapp} </Text>
            </View>
          </View>
          <Table data={data} />
        </View>
      </Page>
    </Document>
  );
}
