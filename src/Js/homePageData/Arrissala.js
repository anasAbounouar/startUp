// libraryData.js
// hadchi zaaaaaaaaaaayd
export const libraryData = {
  libraryName: "Arrissala",
  boxes: [
    {
      id: 0,
      name: "Papeterie",
      description:
        "Livres scolaires, manuels,  romans, poésie, livres d'activités, etc.",
      btn: "livres/histoire",
      imgSrc: require("@/img/library-home/papeterie-photo.svg"),
      pageSrc: "/LivresHistoires",
    },
    {
      id: 1,
      name: "Écriture",
      description:
        " des crayons, des stylos, des marqueurs, des surligneurs, des gommes, etc.",
      btn: "Écriture",
      imgSrc: require("@/img/library-home/ecriture-image.svg"),
      pageSrc: "/Ecritures",
    },
    {
      id: 2,
      name: "Organisation",
      description:
        " des classeurs, des chemises, des porte-documents, des pochettes, des trombones, des agrafeuses, etc..",
      btn: "Cahier",
      imgSrc: require("@/img/library-home/organisation-image.svg"),
      pageSrc: "/",
    },
  ],
};
