"use client";

import * as React from "react";
import { useRef, useState } from "react";
import NavbarItem from "@jektis/components/mobile-layout/NavbarItem";
import { Hamburger } from "@jektis/components/icons";
import SideBar from "@jektis/components/mobile-layout/SideBar";
import { motion, useAnimation } from "framer-motion";

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
  const animate = useAnimation();
  const hamburgerAnimate = useAnimation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  async function onSideBarClose() {
    animate.set({ y: -40 });
    animate.start({ x: 100, y: -40, opacity: 0 }, { duration: 1 });
    await hamburgerAnimate.start({ opacity: 1 }, { duration: 1 });
    setIsNavOpen(false);
  }

  async function onSideBarOpen() {
    hamburgerAnimate.start({ opacity: 0 }, { duration: 1 });
    setIsNavOpen(true);
  }

  return (
    <div className="flex lg:hidden items-center justify-between">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <motion.div
            animate={hamburgerAnimate}
            className="HAMBURGER-ICON space-y-2"
            onClick={onSideBarOpen}
          >
            <Hamburger className="w-12 h-12 border-[3px] border-[#1d4f9f] rounded-lg" />
          </motion.div>
          {isNavOpen && (
            <motion.div
              animate={animate}
              className="absolute top-10 right-0 z-10 "
            >
              <SideBar onClose={onSideBarClose} />
            </motion.div>
          )}
        </section>
      </nav>
    </div>
  );
}
