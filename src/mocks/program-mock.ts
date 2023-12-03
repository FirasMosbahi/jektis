import VoyageDetailsProps, {
  Chambres,
  ProgramDay,
} from "@jektis/types/voyage-details-props";

export const servicesInclus = {
  standard: [
    "Vol Tunis - Dubai - Tunis sur un vol Emirates.",
    "Hébergement 8 jours / 7 nuits à Dubai à l'hôtel Golden Tulip Madia 4* en logement & petit déjeuner.",
    "Excursion Découverte à Dubai: Sheikh Zayed, Burj El Arab, Palm Island, Atlantis Hotel et Burj Khalifa...",
    "Excursion d'une journée à la découverte d'Abu Dhabi : Mosquée de Sheikh Zayed, Musée d'Abu Dhabi, & Ferrari World...",
    "Croisière en YACHT VIP 5*",
    "Transfert en bus touristique climatisé.",
    "Assistance d'un guide professionnel parlant l'arabe durant tout le séjour.",
  ],
  vip: [
    "Vol Tunis - Dubai - Tunis sur un vol Emirates.",
    "Hébergement 8 jours / 7 nuits à Dubai à l'hôtel Colden Tulip Madia 4* en logement & petit déjeuner.",
    "Excursion à Dubai: Sheikh Zayed, Burj El Arab, Palm Island, Atlantis Hotel et Burj Khalifa...",
    "Excursion d'une journée à la découverte d'Abu Dhabi : Mosquée de Sheikh Zayed, Musée d'Abu Dhabi, & Ferrari World...",
    "Croisière en YACHT VIP 5* Diner à l'Hotel Atlentis Visite Miracla Garden et Global village (tickets inclus).",
    "Safari en 4*4 Transfert en bus touristique climatisé.",
    "Assistance d'un guide professionnel parlant l'arabe durant tout le séjour.",
  ],
};

export const servicesNonInclus = [
  "Timbre de Voyage, Assurance.",
  "Frais de visa (non remboursables): 400 Dt",
  "Dîner & Show oriental sur un bateau 5* de la marina la plus luxueuse du monde entourée par les Gratte-ciel: 260 dt/ pax",
  "Taxe de Séjour - Golden Tulip Media Hotel 4*: 15 ACD/Nuit/Chambre",
];

export const visa = [
  "1 photo d'identité",
  "1 copie couleur de la première page du passeport (format jpg)",
  "Billet Emirates, avec les frais de visa entrés dans la taxe YR (pénalité applicable selon la note tarifaire)",
];

export const chargeeDeVoyage = ["WhatsApp: 98538070"];

export const payement: string[] = [
  "50% du montant total à l'inscription",
  "Le reliquat 15 jours avant départ",
];

export const prix = [
  "Prix Adult En chambre Double 3290 dt",
  "Prix Enfant -12 ans partage la chambre avec les parents: 3090 dt",
];

// Room Types
export const chambres: Chambres[] = [
  { title: "Chambre Standard", unitPrice: 100 },
  { title: "Suite de Luxe", unitPrice: 200 },
];
export const cancelFrais = [
  "Frais de dossiers (quelques soit la/les raison/s d'annulation du client) : 500 TND",
  "Annulation faite entre J-45 et J-30 : pénalité 35% du montant du Voyage",
  "Annulation faite entre J-29 et J-15 : pénalité 50% du montant du Voyage",
  "Annulation faite entre J-14 et Jour J : Totalité du montant du Voyage",
  "En cas d'annulation d'une personne partageant une chambre avec une autre personne, il sera de sa responsabilité de payer le supplément single en dessus des frais d'annulations",
  "Toute modification de changement de date (de retour) avant le départ sera sujette à des frais qui seront calculés et communiqués par la compagnie",
  "Le programme détaillé et les vols sont sous réserve de modification par la compagnie aérienne sans préavis et ce en fonction des conditions météorolagiques ou tout autre force majeure sur place",
];
export const program: ProgramDay[] = [
  {
    title: "Jour 1: Bienvenue à la destination",
    content: `
      Aujourd'hui marque le début de notre incroyable aventure! Après avoir atterri dans cette destination enchanteresse, nous nous installerons à notre hébergement. Une fois installés, nous explorerons les environs pour nous imprégner de l'atmosphère locale. Ne manquez pas de déguster des plats authentiques dans un restaurant local et de vous immerger dans la culture unique de la région.
      
      En soirée, une balade détendue pour découvrir les charmes nocturnes de la ville sera le moyen idéal de conclure cette première journée inoubliable.
    `,
  },
  {
    title: "Jour 2: Aventure en plein air",
    content: `
      Aujourd'hui, nous nous aventurerons à l'extérieur pour explorer la nature spectaculaire qui entoure notre destination. Que ce soit par une randonnée pittoresque, une escapade à vélo ou une excursion en bateau, la journée sera consacrée à s'émerveiller devant les paysages à couper le souffle. N'oubliez pas d'apporter votre appareil photo pour capturer des moments mémorables!

      En soirée, nous aurons l'occasion de nous détendre et de partager nos expériences autour d'un délicieux dîner dans un cadre charmant.
    `,
  },
  {
    title: "Jour 3: Plongée dans l'histoire locale",
    content: `
      Afin de mieux comprendre la riche histoire de cette destination, aujourd'hui sera dédié à l'exploration des sites historiques emblématiques. Des musées fascinants aux monuments anciens, chaque étape nous transportera dans le passé captivant de la région. Des guides locaux passionnés partageront des anecdotes intrigantes pour donner vie à chaque lieu que nous visiterons.

      La soirée se terminera par une délicieuse dégustation de plats traditionnels, offrant un véritable festin pour nos papilles.
    `,
  },
  {
    title: "Jour 4: Journée de Détente",
    content: `
      Après quelques journées bien remplies, nous méritons une pause dédiée à la détente. Profitez d'une journée libre pour explorer la ville à votre rythme, faire du shopping dans les marchés locaux ou vous détendre dans un spa relaxant. Cette journée libre permettra à chacun de choisir ses propres activités, que ce soit flâner dans les ruelles pittoresques ou se prélasser au soleil sur une plage tranquille.

      En soirée, rejoignez-nous pour un dîner décontracté pour partager vos découvertes de la journée.
    `,
  },
  {
    title: "Jour 5: Aventure Culinaire",
    content: `
      Aujourd'hui, nous explorerons les délices culinaires de la région! Commencez la journée par une visite du marché local, où nous choisirons des ingrédients frais pour un cours de cuisine interactif. Apprenez les secrets de la cuisine locale auprès de chefs talentueux et dégustez les fruits de votre travail lors d'un déjeuner convivial.

      En soirée, une dégustation de vins locaux et de spécialités gastronomiques sera le point culminant de cette journée gourmande.
    `,
  },
  {
    title: "Jour 6: Aventure Urbaine",
    content: `
      Plongeons-nous dans l'énergie dynamique de la vie urbaine aujourd'hui! Explorez les quartiers animés, visitez des galeries d'art contemporain et découvrez l'effervescence culturelle de la ville. Que ce soit en visitant des boutiques uniques, en dégustant des cafés locaux ou en participant à des événements culturels, cette journée urbaine sera pleine de découvertes fascinantes.

      En soirée, prenez part à une activité nocturne locale pour vivre pleinement l'atmosphère vibrante de la vie nocturne.
    `,
  },
  {
    title: "Jour 7: Adieu, mais pas au revoir",
    content: `
      Le dernier jour de notre voyage est arrivé, mais la magie ne s'arrête pas ici. Profitez d'une dernière matinée pour explorer les environs ou pour faire des emplettes de souvenirs mémorables. Nous clôturerons notre voyage par un déjeuner d'adieu où nous pourrons partager nos moments préférés et échanger des contacts pour rester en contact.

      En partant, rappelez-vous que ce n'est qu'un au revoir à cette destination spéciale. Les souvenirs que nous avons créés ensemble resteront avec nous pour toujours.
    `,
  },
];
