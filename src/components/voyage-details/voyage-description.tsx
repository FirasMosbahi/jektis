import React from "react";
import ProgramDayDescription from "@jektis/components/voyage-details/program-day-description";
import ChambreSelectionTable from "@jektis/components/voyage-details/chambre-selection-table";

export default function VoyageDetails(): React.ReactNode {
  return (
    <div>
      <div className="mt-6 mb-4">
        <strong className="text-[#1b53a1] text-3xl ">PROGRAMME</strong>
      </div>
      <div className="border-b-4 pb-8 mb-4">
        <ProgramDayDescription />
        <ProgramDayDescription />
        <button className="bg-[#cacaca] text-black border-transparent rounded-xl text-xl py-0.5 mt-4 px-4">
          Voir plus
        </button>
      </div>
      <ChambreSelectionTable />
      <div className="flex flex-col gap-6 border-[#dbdbdb] border-y-4 mt-8 py-4">
        <strong className="text-3xl text-[#1c4678]">SERVICES INCLUS</strong>
        <strong className="text-xl text-black">Pack Standard comprends:</strong>
        <div className="text-black">
          Vol Tunis - Dubai - Tunis sur un vol Emirates.
          <br /> Hebergement 8 jours / 7 nuits à Dubai à l{"'"}hotel Golden
          Tulip Madia 4* en logement & petit déjeuner.
          <br /> Excursion Découverte à Dubai: Sheikh Zayed, Burj El Arab, Palm
          Island, Atlantis Hotel et Burj Khalifa...
          <br /> Excursion d{"'"}une journée à la découverte d{"'"}Abu Dhabi :
          Mosquée de Sheikh Zayed, Musée d{"'"}Abu Dhabi, & Ferrari Word..
          <br /> Croisière en YACHT VIP 5*
          <br />
          Transfert en bus tauristique climatisé.
          <br /> Assistance d{"'"}un guide professionnem parlant l{"'"}arabe
          durant tout le séjour.
        </div>
        <strong className="text-black text-xl">Pack VIP comprends:</strong>
        <div className="text-black">
          Vol Tunis - Dubai - Tunis sur un vol Emirates.
          <br /> Hebergement 8 jours / 7 nuits à Dubai à l{"'"}hotel Colden
          Tulip Madia 4* en logement & petit déjeuner. <br />
          Excursion à Dubai: Sheikh Zayed, Burj El Arab, Palm Island, Atlantis
          Hotel et Burj Khalifa... <br />
          Excursion d{"'"}une journée à la découverte d{"'"}Abu Dhabi : Mosquée
          de Sheikh Zayed, Musée d{"'"}Abu Dhabi, & Ferrari Word..
          <br /> Croisière en YACHT VIP 5* Diner à l{"'"}Hotel Atlentis Visite
          Miracla Garden et Global village (tickets inclus).
          <br /> Safari en 4*4 Transfert en bus touristique climatisé.
          <br /> Assistance d{"'"}un guide professionnel parlant l{"'"}arabe
          durant tout le séjour.
        </div>
      </div>
      <div className="flex flex-col gap-6 border-[#dbdbdb] border-b-4 py-4 ">
        <strong className="text-3xl text-[#1c4678]">SERVICES NON INCLUS</strong>
        <div className="text-black">
          Timbre de Voyage, Assurance.
          <br />
          Frais de visa (non remboursables): 400 Dt
          <br />
          Diner & Show oriental sur un bateau 5* de la marina la plus luxueuse
          du monde entourée par les Gratte-cie: 260 dt/ pax
          <br />
          Taxe de Séjour - Golden Tulip Media Hotel 4*: 15 ACD/Nuit/Chambre
        </div>
      </div>
      <div className="flex flex-col gap-6 border-[#dbdbdb] border-b-4 py-4 ">
        <strong className="text-3xl text-[#1c4678]">VISA </strong>
        <ul className="text-black">
          <li>- 1 photo d{"'"}identité</li>
          <li>
            - 1 copie couleur de la première page du passeport (format jpg)
          </li>
          <li>
            - Billet Emirates, avec les frais de visa entrés dans la taxe YR
            (pénalité applicable selon la note tarifaire)
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 border-[#dbdbdb] border-b-4 py-4 ">
        <strong className="text-3xl text-[#1c4678]">CHARGé(E) DU VOYAGE</strong>
        <p className="text-black">WhatsApp: 98538070</p>
      </div>
      <div className="flex flex-col gap-6 border-[#dbdbdb] border-b-4 py-4 ">
        <strong className="text-3xl text-[#1c4678]">Paiement :</strong>
        <ul className="text-black">
          <li>-50% du montant total à l{"'"}inscription</li>
          <li>-Le reliquat 15 jours avant départ</li>{" "}
        </ul>
      </div>
      <div className="flex flex-col gap-6 border-[#dbdbdb] py-4">
        <strong className="text-3xl text-[#1c4678]">TARIF</strong>
        <strong className="text-xl text-black">
          date de voyage : Du 30 Octobre au 05 Novembre 2023
        </strong>
        <ul className="text-black mb-4">
          <li>Prix Adult En chambre Double 3290 dt</li>
          <li>
            Prix Enfant -12 ans partage la chambre avec les parents: 3090 dt
          </li>
        </ul>
        <p className="text-black">
          Ci-dessous les conditions générales du voyage :
        </p>
        <strong className="text-xl text-black">Paiement :</strong>
        <ul className="text-black">
          <li>-50% du montant total à l{"'"}inscription</li>
          <li>-Le reliquat 15 jours avant départ</li>{" "}
        </ul>
        <strong className="text-xl text-black">Frais d{"'"}annulation :</strong>
        <ul className="text-black">
          <li>
            {" "}
            -Frais de dossiers (quelques soit la/les raison/s d{"'"}annulation
            du client) : 500 TND
          </li>
          <li>
            {" "}
            -Annulation faite entre J-45 et J-30 : pénalité 35% du montant du
            Voyage
          </li>
          <li>
            {" "}
            -Annulation faite entre J-29 et J-15 : pénalité 50% du montant du
            Voyage
          </li>
          <li>
            {" "}
            -Annulation faite entre J-14 et Jour J : Totalité du montant du
            Voyage
          </li>{" "}
          <li>
            {" "}
            En cas d{"'"}annulation d{"'"}une personne partageant une chambre
            avec une autre personne, il sera de sa responsabilité de payer le
            supplément single en dessus des frais d{"'"}annulations
          </li>
          <li>
            {" "}
            Toute modification de changement de date (de retour) avant le départ
            sera sujette à des frais qui seront calculés et communiqués par la
            compagnie
          </li>
          <li>
            {" "}
            Le programme détaillé et les vols sont sous réserve de modification
            par la compagnie aérienne sans préavis et ce en fonction des
            conditions météorolagiques ou tout autre force majeure sur place
          </li>
        </ul>
      </div>
    </div>
  );
}
