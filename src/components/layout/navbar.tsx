import { Home } from "@jektis/components/icons";

export default function Navbar(): React.ReactNode {
  return (
    <>
      <div
        className="inline-flex rounded-md text-white shadow-sm mt-8 lg:mx-0 mx-2  mb-16 pl-16"
        role="group"
      >
        <button
          type="button"
          className="lg:px-4  px-1 py-4 bg-[#054d9f] font-medium  border border-[#054d9f] rounded-s-lg"
        >
          <Home width={30} height={30} />
        </button>
        <button
          type="button"
          className="lg:px-4 py-4 px-1 lg:w-48 font-medium bg-opacity-60 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Hotels en Tunisie
        </button>
        <button
          type="button"
          className="px-4 py-4 w-32 lg:block hidden font-medium bg-opacity-60 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Billet
        </button>
        <button
          type="button"
          className="lg:px-4 px-1 py-4 lg:w-48 font-medium bg-opacity-60 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Voyage en Groupe
        </button>
        <button
          type="button"
          className="lg:px-4 px-1 py-4 lg:w-48 font-medium bg-opacity-60 bg-whiteBlue border lg:border-b  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Voyages de Noces
        </button>
        <button
          type="button"
          className="px-4 py-4 w-28 lg:block hidden font-medium bg-opacity-60 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          USA
        </button>
        <button
          type="button"
          className="px-4 py-4 w-28 lg:block hidden font-medium bg-opacity-60 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          VISA
        </button>
        <button
          type="button"
          className="px-4 py-4 w-52 lg:block hidden font-medium bg-opacity-60 bg-whiteBlue border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Espace Entreprise
        </button>
        <button
          type="button"
          className="px-4 py-4 w-36 lg:block hidden font-medium bg-opacity-60 bg-whiteBlue border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Contact
        </button>
      </div>
    </>
  );
}
