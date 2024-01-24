import { Home } from "@jektis/components/icons";
import Link from "next/link";

export default function Navbar(): React.ReactNode {
  return (
    <>
      <div
        className="flex flex-row justify-center rounded-md text-white shadow-sm mt-8 lg:mx-0 w-full mb-16"
        role="group"
      >
        <Link href="/" className="2xl:min-w-[4%]">
          <button
            type="button"
            className="lg:px-6 w-full px-1 h-12 bg-[#054d9f] font-medium  border border-[#054d9f] rounded-s-lg"
          >
            <Home height={25} width={25} />
          </button>
        </Link>
        <Link className="2xl:min-w-[14%]" href="/hotels-list">
          <button
            type="button"
            className="px-3 h-12 2xl:w-full font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Hotels en Tunisie
          </button>
        </Link>
        <button
          type="button"
          className="px-6 2xl:min-w-[9%] h-12font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Billet
        </button>
        <Link
          className="2xl:min-w-[14%]"
          href="/voyages?category=voyage_a_la_carte"
        >
          <button
            type="button"
            className="px-3 h-12 xl:blockfont-medium w-full bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Voyage en Groupe
          </button>
        </Link>
        <Link
          className="2xl:min-w-[14%]"
          href="/voyages?category=voyage_de_noces"
        >
          <button
            type="button"
            className="px-3 2xl:w-full h-12 xl:block hidden  font-medium bg-opacity-80 bg-whiteBlue border lg:border-b  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Voyages de Noces
          </button>
        </Link>
        <button
          type="button"
          className="px-5 h-12 xl:block hidden 2xl:min-w-[9%] font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          USA
        </button>
        <button
          type="button"
          className="px-5 h-12 xl:block 2xl:min-w-[9%] hidden font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          VISA
        </button>
        <button
          type="button"
          className="px-3 h-12 xl:block 2xl:min-w-[14%] hidden font-medium bg-opacity-80 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Espace Entreprise
        </button>
        <button
          type="button"
          className="px-5 h-12 2xl:min-w-[10%] font-medium bg-opacity-80 bg-whiteBlue border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Contact
        </button>
      </div>
    </>
  );
}
