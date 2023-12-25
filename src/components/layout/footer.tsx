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
import { VoyageType } from "@jektis/types";

export default function Footer(): React.ReactNode {
  return (
    <div className="flex flex-col md:mt-0 mt-12 pb-8 gap-16 xl:flex-row h-fit text-white bg-black bg-opacity-60 w-full px-12 justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row border-b-4 gap-16 mb-4 py-4">
          <div className="flex flex-col text-center">
            <strong className="text-5xl">Jektis Travel</strong>
            <p className="text-xl">Le voyage, C{"'"}est notre métier</p>
          </div>
          <div className="flex flex-col">
            <strong className="text-xl">Agence de Voyages (Lic A),</strong>
            <p>Agrée par l{"'"}ONTT, membre de la FTAV , Accrédité IATA.</p>
            <p>
              Spécialisée dans l{"'"}organisation de voyages à l{"'"}étranger.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:gap-24">
          <div className="flex flex-col">
            <strong className="mb-4">Nos Hotels</strong>
            <Link className="cursor-pointer" href="/hotels-list?city=tunis">
              Hotels à Tunis
            </Link>
            <Link className="cursor-pointer" href="/hotels-list?city=sousse">
              Hotels à Sousse
            </Link>
            <Link className="cursor-pointer" href="/hotels-list?city=hammamet">
              Hotels à Hammamet
            </Link>
            <Link className="cursor-pointer" href="/hotels-list?city=djerba">
              Hotels à Djerba
            </Link>
            <Link className="cursor-pointer" href="/hotels-list?city=kelibia">
              Hotels à Kelibia
            </Link>
            <Link className="cursor-pointer" href="/hotels-list?city=monastir">
              Hotels à Monastir
            </Link>
          </div>
          <div className="flex flex-col">
            <strong className="mb-4">Nos programmes</strong>
            <Link
              className="cursor-pointer"
              href={`/voyages?category=${VoyageType.VOYAGE_ORGANISE}`}
            >
              Voyages organisés
            </Link>
            <Link
              className="cursor-pointer"
              href={`/voyages?category=${VoyageType.VOYAGE_DE_NOCES}`}
            >
              Voyages de noces
            </Link>
            <Link
              className="cursor-pointer"
              href={`/voyages?category=${VoyageType.VOYAGE_A_LA_CARTE}`}
            >
              Voyages à la carte
            </Link>
            <Link
              className="cursor-pointer"
              href={`/voyages?category=${VoyageType.CIRCUIT_SUD}`}
            >
              Circuits sud
            </Link>
          </div>
          <div className="flex flex-col">
            <strong className="mb-4">Infos pratiques</strong>
            <Link href="#">Conditions de vente</Link>
            <Link href="#">Pour la visa</Link>
            <Link href="#">Recrutement</Link>
            <Link href="#">Mentions légales</Link>
          </div>
        </div>
        <div className="flex flex-col md:mt-4 mt-24 md:flex-row text-xl items-center gap-8 mb-12">
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
          <Facebook width={35} height={35} />
          <Messanger width={35} height={35} />
          <Instagram width={35} height={35} />
          <Linkedin width={35} height={35} />
          <Youtube width={35} height={35} />
          <Twitter width={35} height={35} />
          <Tiktok width={35} height={35} />
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
