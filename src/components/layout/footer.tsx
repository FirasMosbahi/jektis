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
import Image from "next/image";

export default function Footer(): React.ReactNode {
  return (
    <div className="flex flex-col md:mt-0 lg:mr-0 mr-4 mt-12 pb-2 xl:pb-0 xl:gap-12 gap-6 xl:flex-row h-fit text-white bg-black bg-opacity-40 w-full px-6 xl:px-6 justify-between">
      <div className="flex flex-col 3xl:max-w-[70%]">
        <div className="flex flex-col sm:flex-row border-b-4 gap-12 mb-4 py-4">
          <div className="flex flex-col text-center max-w-[250px]">
            <Image
              src="/logo_footer.png"
              alt="jektis logo"
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col  max-w-[300px]">
            <strong className="text-nowrap text-[22px]">
              Agence de Voyages (Lic A),
            </strong>
            <p className="text-nowrap text-[15px] 3xl:text-[18rem]">
              Agrée par l{"'"}ONTT, membre de la FTAV , Accrédité IATA.
            </p>
            <p className="text-nowrap">
              Spécialisée dans l{"'"}organisation de voyages à l{"'"}étranger.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap font-[300] leading-5 text-[18px] 3xl:text-[22px] gap-12  md:gap-16">
          <div className="flex flex-col">
            <strong className="mb-4 font-[500] text-[20px]">Nos Hotels</strong>
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
            <strong className="mb-4 font-[500] text-[20px]">
              Nos programmes
            </strong>
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
            <strong className="mb-4 text-[20px] font-[500]">
              Infos pratiques
            </strong>
            <Link href="#">Conditions de vente</Link>
            <Link href="#">Pour la visa</Link>
            <Link href="#">Recrutement</Link>
            <Link href="#">Mentions légales</Link>
          </div>
        </div>
        <div className="flex xl:flex-row xl:items-center flex-col md:mt-4 mt-8 xl:mt-2 3xl:text-[1.5rem]  border-y-white border-y-4 py-4 xl:py-0 xl:pb-1 xl:border-y-transparent xl:pt-0 3xl:pt-12 text-sm gap-8 xl:gap-6">
          <p className="lg:text-[18px] text-xl font-bold lg:font-[300]">
            Recevez nos promotions par mail
          </p>
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-1">
            <input
              type="email"
              id="email"
              placeholder="Veuiller ajouter votre e-mail ici"
              className="bg-gray-50 w-52 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            />
            <button className="bg-blue-400 px-12 py-1">OK</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[22px] gap-6 xl:mt-7 leading-none">
        <div className="flex flex-col gap-2">
          <strong>Suivez Nous</strong>
          <div className="bg-white opacity-100 gap-x-4 py-2 px-2 flex flex-row flex-wrap gap-y-4 w-fit">
            <Facebook width={25} height={25} />
            <Messanger width={25} height={25} />
            <Instagram width={25} height={25} />
            <Linkedin width={25} height={25} />
            <Youtube width={25} height={25} />
            <Twitter width={25} height={25} />
            <Tiktok width={25} height={25} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <strong>Paiement Sécurisé</strong>
          <div className="bg-white opacity-100 flex flex-row flex-wrap gap-y-4 gap-4 px-2 py-2 w-fit">
            <Visa width={50} height={50} />
            <MasterCard width={50} height={50} />
            <AmericanExpress width={50} height={50} />
            <DinersClub width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
