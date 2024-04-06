"use client";

import React from "react";
import ContactElement from "@jektis/components/contacts/contact-element";
import SocialBar from "@jektis/components/contacts/SocialBar";

export default function Index(): React.ReactNode {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col w-full bg-white lg:w-[64%] lg:py-8 py-4">
        <ContactElement location="/contacts/location1.jpg" name="ARIANA" />
        <ContactElement location="/contacts/location1.jpg" name="MENZAH 9" />
      </div>
      <div className="flex flex-col bg-white lg:w-[34%] w-full lg:pb-0 pb-4 px-8">
        <p className="text-blue-800 lg:pb-10 pb-4 lg:pt-16 pt-4 text-[24px] font-semibold">
          NOUS CONTACTER :
        </p>
        <form className="flex flex-col lg:gap-4 gap-2">
          <input
            type="text"
            id="nomEtPrenom"
            placeholder="nom et prénom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5"
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5"
          />
          <input
            type="tel"
            id="telephone"
            placeholder="telephone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5"
          />
          <select
            id="motif"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5"
          >
            <option>Motif de contact</option>
          </select>
          <textarea
            id="message"
            rows={5}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Message"
          ></textarea>
          <p className="text-gray-700 mt-4">
            Merci de choisir le service auquel vous souhaiter envoyer un mail :
          </p>
          <select
            id="motif"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5"
          >
            <option selected>Service</option>
          </select>
        </form>
      </div>
    </div>
  );
}
