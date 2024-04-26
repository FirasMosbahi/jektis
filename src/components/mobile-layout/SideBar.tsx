"use client";

import NavbarItem from "@jektis/components/mobile-layout/NavbarItem";
import {
  Billet,
  Close,
  ContactsSideBar,
  EspaceEntreprise,
  Group,
  HotelSideBarIcon,
  Noces,
  Usa,
  VisaSideBar,
} from "@jektis/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouteChange } from "@jektis/hooks/useRouteChange";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function SideBar({ onClose }: { onClose: () => void }) {
  const animate = useAnimation();

  async function onSideBarOpening() {
    animate.set({ x: 50, y: 10, opacity: 0 });
    await animate.start({ x: 0, opacity: 1 }, { duration: 1 });
  }

  const pathName = usePathname();
  const params = useSearchParams();
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    if (load) {
      onClose();
      setLoad(false);
    } else {
      setLoad(true);
      onSideBarOpening();
    }
  }, [params, pathName]);
  return (
    <motion.aside
      animate={animate}
      id="sidebar-multi-level-sidebar"
      className="fixed top-6 right-0 z-50 w-64"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 border border-transparent rounded-l-3xl">
        <div className="flex flex-row items-center justify-between px-2 border-b pb-2 mb-2">
          <Link href="/">
            <Image src="/logo_footer.png" alt="logo" width={150} height={150} />
          </Link>
          <Close className="size-6" onClick={onClose} />
        </div>
        <ul className="space-y-2 font-medium">
          <NavbarItem
            link="/hotels-list"
            title="Hotels en Tunisie"
            icon={<HotelSideBarIcon className="size-6" />}
          />
          <NavbarItem
            link="/voyages?category=voyage_a_la_carte"
            title="Voyage de Groupe"
            icon={<Group className="size-6" />}
          />
          <NavbarItem
            link="/voyages?category=voyage_de_noces"
            title="Voyage de Noces"
            icon={<Noces className="size-6" />}
          />
          <NavbarItem
            link="#"
            title="Billet"
            icon={<Billet className="size-6" />}
          />
          <NavbarItem link="#" title="USA" icon={<Usa className="size-6" />} />
          <NavbarItem
            link="#"
            title="VISA"
            icon={<VisaSideBar className="size-6" />}
          />
          <NavbarItem
            link="#"
            title="Espace Entreprise"
            icon={<EspaceEntreprise className="size-6" />}
          />
          <NavbarItem
            link="/contacts"
            title="Contacts"
            icon={<ContactsSideBar className="size-6" />}
          />
        </ul>
      </div>
    </motion.aside>
  );
}
