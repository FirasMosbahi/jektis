import { Home } from "@jektis/components/icons";
import Link from "next/link";
import NavbarElement from "@jektis/components/generic/NavbarElement";

export enum NavbarElementSize {
  SM,
  MD,
  XL,
}
export default function Navbar(): React.ReactNode {
  return (
    <>
      <div
        className="flex flex-row font-light text-[18px] justify-center text-white shadow-sm mt-8 lg:my-4 w-full mb-8"
        role="group"
      >
        <NavbarElement
          size={NavbarElementSize.SM}
          link="/"
          isFirst={true}
          title={
            <div className="flex flex-row justify-center">
              <Home height={25} width={25} />
            </div>
          }
        />
        <NavbarElement
          size={NavbarElementSize.XL}
          link="/hotels-list"
          title="Hotels en Tunisie"
        />
        <NavbarElement size={NavbarElementSize.SM} link="#" title="Billet" />
        <NavbarElement
          size={NavbarElementSize.XL}
          link="/voyages?category=voyage_a_la_carte"
          title="Voyage en Groupe"
        />
        <NavbarElement
          size={NavbarElementSize.XL}
          link="/voyages?category=voyage_de_noces"
          title="Voyages de Noces"
        />
        <NavbarElement size={NavbarElementSize.SM} link="#" title="USA" />
        <NavbarElement size={NavbarElementSize.SM} link="#" title="VISA" />
        <NavbarElement
          size={NavbarElementSize.XL}
          link="#"
          title="Espace Entreprise"
        />
        <NavbarElement
          isLast={true}
          size={NavbarElementSize.MD}
          link="/contacts"
          title="Contact"
        />
      </div>
    </>
  );
}
