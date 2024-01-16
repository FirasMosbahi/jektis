import { Home } from "@jektis/components/icons";
import Link from "next/link";

export default function Navbar(): React.ReactNode {
  return (
    <>
      <div
        className="flex flex-row justify-center rounded-md text-white shadow-sm mt-8 lg:mx-0 w-full mb-16 mx-16"
        role="group"
      >
        <Link href="/">
          <button
            type="button"
            className="lg:px-4 px-1 h-12 bg-[#054d9f] font-medium  border border-[#054d9f] rounded-s-lg"
          >
            <Home height={25} width={25} />
          </button>
        </Link>
        <Link href="/hotels-list">
          <button
            type="button"
            className="lg:px-4 px-4 xl:px-0 h-12 xl:w-40 w-52 font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Hotels en Tunisie
          </button>
        </Link>
        <button
          type="button"
          className="px-4 xl:px-2 xl:w-20 h-12 w-[20%] font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Billet
        </button>
        <Link href="/voyages?category=voyage_a_la_carte">
          <button
            type="button"
            className="lg:px-4 xl:block h-12 hidden px-1 lg:w-48 font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Voyage en Groupe
          </button>
        </Link>
        <Link href="/voyages?category=voyage_de_noces">
          <button
            type="button"
            className="lg:px-4 px-1 h-12 xl:block hidden lg:w-48 font-medium bg-opacity-80 bg-whiteBlue border lg:border-b  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Voyages de Noces
          </button>
        </Link>
        <button
          type="button"
          className="px-4 w-20 xl:block h-12 hidden font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          USA
        </button>
        <button
          type="button"
          className="px-4 w-20 xl:block h-12 hidden font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          VISA
        </button>
        <button
          type="button"
          className="px-4 w-44 xl:block h-12 hidden font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Espace Entreprise
        </button>
        <button
          type="button"
          className="px-4 xl:w-28 w-[20%] h-12 font-medium bg-opacity-80 bg-whiteBlue border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Contact
        </button>
      </div>
    </>
  );
}
