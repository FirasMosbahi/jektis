"use client";

import React from "react";

export default function Index(): React.ReactNode {
  return (
    <div className="flex flex-row gap-8">
      {/*<div className="flex flex-col w-full">*/}
      {/*  <ContactElement long={36.8545936} lat={10.1836798} name="Ariana" />*/}
      {/*  <ContactElement long={36.8488418} lat={10.147758} name="Menzah 9" />*/}
      {/*</div>*/}
      <div className="flex flex-col bg-white w-1/3 px-8">
        <strong className="text-blue-800 py-16 text-2xl">
          Nous Contacter :
        </strong>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            id="nomEtPrenom"
            placeholder="nom et prénom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="tel"
            id="telephone"
            placeholder="telephone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <select
            id="motif"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Motif de contact</option>
          </select>
          <textarea
            id="message"
            rows={5}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <p>
            Merci de choisir le service auquel vous souhaiter envoyer un mail :
          </p>
          <select
            id="motif"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Service</option>
          </select>
        </form>
      </div>
    </div>
  );
}
