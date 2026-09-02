// Fuente única de datos de patrocinadores.
// Para agregar, quitar o editar un patrocinador, modifica solo este arreglo:
// - name: nombre mostrado
// - image: ruta de la imagen (carpeta imagenes/)
// - href: enlace del patrocinador ("#" si aún no hay enlace)
// - featured: true para aparecer también en el carrusel de la página de inicio
// - dark: true si el logo tiene fondo negro/oscuro (usa fondo negro en la tarjeta en vez de blanco)
const PATROCINADORES = [
  {
    name: "Cumparsita",
    image: "imagenes/cumparsita.jpeg",
    href: "https://www.instagram.com/cumparsita_mx/",
    featured: true,
  },
  {
    name: "Lusso",
    image: "imagenes/lusso.jpeg",
    href: "https://www.instagram.com/lusso.storemx/",
    featured: true,
    dark: true,
  },
  {
    name: "N&S Fresh",
    image: "imagenes/nysfresh.jpeg",
    href: "https://www.instagram.com/nsfreshproduce/",
    featured: true,
  },
  // {
  //   name: "Trópico",
  //   image: "imagenes/tropico.jpeg",
  //   href: "https://www.instagram.com/tropicoburgers",
  //   featured: true,
  // },
  // {
  //   name: "Maja",
  //   image: "imagenes/maja.jpeg",
  //   href: "https://www.instagram.com/majasportswear/",
  //   featured: true,
  // },
  {
    name: "Lucca",
    image: "imagenes/lucca.jpeg",
    href: "https://www.instagram.com/luccaolioelegna/",
    featured: true,
  },
  {
    name: "Concretos DDC",
    image: "imagenes/concretos.jpeg",
    href: "https://www.instagram.com/concretosdcc/",
    featured: true,
  },
  {
    name: "Gapasa",
    image: "imagenes/gapasa.jpeg",
    href: "https://maps.app.goo.gl/88HmEosm9JHv7DiF8",
    featured: true,
  },
  {
    name: "Lazpro",
    image: "imagenes/lazpro.jpeg",
    href: "https://www.instagram.com/lazpro_acuacultura/",
    featured: true,
  },
  {
    name: "Colima Padel Club",
    image: "imagenes/cpc.jpeg",
    href: "https://www.instagram.com/colimapadelclub/",
    featured: true,
  },
  {
    name: "Universidad de Colima",
    image: "imagenes/udec.jpeg",
    href: "https://www.ucol.mx/",
    featured: true,
  },
  {
    name: "Territorio Verde",
    image: "imagenes/tverde.jpeg",
    href: "https://www.facebook.com/Territorio-Verde-Cesped-111250939037476/",
    featured: true,
  },
  {
    name: "Ferretool",
    image: "imagenes/ferretool.jpeg",
    href: "https://www.facebook.com/FerretoolColima/",
    featured: true,
  },
  {
    name: "Dr. Carlos Torres Ortiz",
    image: "imagenes/drcarlos.jpeg",
    href: "https://www.facebook.com/Dr.CarlosTorresOrtiz.CirugiaPlastica/",
    featured: true,
  },
  {
    name: "Vinos Chavez",
    image: "imagenes/chavez.jpeg",
    href: "https://www.facebook.com/share/1DGtdvVxxc/?mibextid=wwXIfr",
    featured: true,
  },
  // {
  //   name: "Box GFS",
  //   image: "imagenes/box_gfs.jpeg",
  //   href: "#",
  //   featured: true,
  // },
  {
    name: "Martiniano",
    image: "imagenes/martiniano.jpeg",
    href: "#",
    featured: true,
  },
  {
    name: "Dra. Hilda",
    image: "imagenes/dra_hilda.jpeg",
    href: "#",
    featured: true,
  },
  // {
  //   name: "Flashlyte",
  //   image: "imagenes/flashlyte.jpeg",
  //   href: "#",
  //   featured: true,
  // },
  {
    name: "Powerade",
    image: "imagenes/powerade.jpeg",
    href: "#",
    featured: true,
  },
  // {
  //   name: "Tequila Blanco",
  //   image: "imagenes/tequila_blanco.jpeg",
  //   href: "#",
  //   featured: true,
  // },
];
