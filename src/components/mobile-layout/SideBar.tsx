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
import { useEffect } from "react";
import Image from "next/image";

export default function SideBar({ onClose }: { onClose: () => void }) {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-6 right-0 z-50 w-64"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border border-transparent rounded-l-3xl">
        <div className="flex flex-row items-center justify-between px-2 border-b pb-2 mb-2">
          <Image src="/logo_footer.png" alt="logo" width={150} height={150} />
          <Close className="size-6" onClick={onClose} />
        </div>
        <ul className="space-y-2 font-medium">
          <NavbarItem
            link="#"
            title="Hotels en Tunisie"
            icon={<HotelSideBarIcon className="size-6" />}
          />
          <NavbarItem
            link="#"
            title="Billet"
            icon={<Billet className="size-6" />}
          />
          <NavbarItem
            link="#"
            title="Voyage de Groupe"
            icon={<Group className="size-6" />}
          />
          <NavbarItem
            link="#"
            title="Voyage de Noces"
            icon={<Noces className="size-6" />}
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
            link="#"
            title="Contacts"
            icon={<ContactsSideBar className="size-6" />}
          />
        </ul>
      </div>
    </aside>
  );
}
