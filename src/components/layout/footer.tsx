import React from "react";
import Link from "next/link";
import {
  AmericanExpress,
  DinersClub,
  Facebook,
  Instagram,
  Linkedin,
  MasterCard,
  Messanger,
  Tiktok,
  Twitter,
  Visa,
  Youtube,
} from "@jektis/components/icons";

export default function Footer(): React.ReactNode {
  return (
    <div className="flex flex-col md:mt-0 mt-12 pb-8 xl:flex-row text-white bg-black bg-opacity-60 w-full px-12 justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row border-b-4 gap-16 pb-8 mb-8 pt-8">
          <div className="flex flex-col text-center">
            <strong className="text-5xl">Jektis Travel</strong>
            <p className="text-xl">Le voyage, C{"'"}est notre métier</p>
          </div>
          <div className="flex flex-col text-xl">
            <strong>Agence de Voyages (Lic A),</strong>
            <p>Agrée par l{"'"}ONTT, membre de la FTAV , Accrédité IATA.</p>
            <p>
              Spécialisée dans l{"'"}organisation de voyages à l{"'"}étranger.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:gap-24 text-xl">
          <div className="flex flex-col">
            <strong className="mb-6">Nos Hotels</strong>
            <Link href="#">Hotels à Tunis</Link>
            <Link href="#">Hotels à Sousse</Link>
            <Link href="#">Hotels à Hammamet</Link>
            <Link href="#">Hotels à Djerba</Link>
            <Link href="#">Hotels à Kelibia</Link>
            <Link href="#">Hotels à Monastir</Link>
          </div>
          <div className="flex flex-col">
            <strong className="mb-6">Nos programmes</strong>
            <Link href="#">Voyages organisés</Link>
            <Link href="#">Voyages de noces</Link>
            <Link href="#">Voyages à la carte</Link>
            <Link href="#">Circuits organisés</Link>
          </div>
          <div className="flex flex-col">
            <strong className="mb-6">Infos pratiques</strong>
            <Link href="#">Conditions de vente</Link>
            <Link href="#">Pour la visa</Link>
            <Link href="#">Recrutement</Link>
            <Link href="#">Mentions légales</Link>
          </div>
        </div>
        <div className="flex flex-col md:mt-8 mt-24 md:flex-row text-xl items-center gap-8 mb-12">
          <p>Recevez nos promotions par mail</p>
          <input
            type="email"
            id="email"
            placeholder="Veuiller ajouter votre e-mail ici"
            className="bg-gray-50 w-64 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />
          <button className="bg-blue-400 px-12 py-2">OK</button>
        </div>
      </div>
      <div className="flex flex-col text-3xl gap-6 mt-12">
        <strong>Suivez Nous</strong>
        <div className="bg-white opacity-100 gap-x-4 py-2 px-2 flex flex-row">
          <Facebook width={40} height={40} />
          <Messanger width={40} height={40} />
          <Instagram width={40} height={40} />
          <Linkedin width={40} height={40} />
          <Youtube width={40} height={40} />
          <Twitter width={40} height={40} />
          <Tiktok width={40} height={40} />
        </div>
        <strong>Paiement Sécurisé</strong>
        <div className="bg-white opacity-100 flex flex-row gap-4 px-2 py-2">
          <Visa width={60} height={60} />
          <MasterCard width={60} height={60} />
          <AmericanExpress width={60} height={60} />
          <DinersClub width={60} height={60} />
        </div>
      </div>
    </div>
  );
}
