"use client";

import * as React from "react";
import { useRef, useState } from "react";
import NavbarItem from "@jektis/components/mobile-components/NavbarItem";
import { Hamburger } from "@jektis/components/icons";

const NAVBAR_DATA = [
  {
    title: "Home",
    link: "/",
  },
  { link: "/hotels-list", title: "Hotels en Tunisie" },
  { link: "/voyages?category=voyage_a_la_carte", title: "Voyage en Groupe" },
  { link: "/voyages?category=voyage_de_noces", title: "Voyages de Noces" },
  { link: "#", title: "USA" },
  { link: "#", title: "VISA" },
  { link: "#", title: "Espace Entreprise" },
  { link: "/contacts", title: "Contact" },
];

export default function HamburgerNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center justify-between">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <Hamburger className="w-12 h-12 border-[3px] border-[#1d4f9f] rounded-lg" />
          </div>
          {isNavOpen && (
            <div className="absolute top-10 left-0 z-10 ">
              <div
                className="absolute top-2 right-2"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className=" flex bg-[#789cc0] w-[250px] flex-col items-center min-h-[250px]">
                {NAVBAR_DATA.map((e, index) => (
                  <NavbarItem {...e} key={index} />
                ))}
              </ul>{" "}
            </div>
          )}
        </section>
      </nav>
    </div>
  );
}
