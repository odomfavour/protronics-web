export const navLinks = [
  { id: 1, name: "Home", url: "/" },
  {
    id: 2,
    name: "Our Services",
    url: "/services",
    children: [
      { id: "pcb-design", name: "PCB Design", url: "/pcb-design" },
      { id: "pcb-assembly", name: "PCB Assembly", url: "/pcb-assembly" },
      // { id: "testing", name: "Testing", url: "/testing" },
      { id: "ic-packaging", name: "IC Packaging", url: "/ic-packaging" },
    ],
  },
  // Removed for now
  // {
  //   id: 3,
  //   name: "Company",
  //   url: "#",
  //   children: [
  //     { id: "about-us", name: "About Us", url: "/story" },
  //     { id: "leadership", name: "Leadership", url: "/leadership" },
  //     { id: "equipment", name: "Equipment", url: "/equipment" },
  //   ],
  // },
  {
    id: 3,
    name: "About Us",
    url: "/story",
  },
  {
    id: 4,
    name: "Resources",
    url: "/resources",
    children: [
      { id: "industries", name: "Industries", url: "/industries" },
      { id: "applications", name: "Applications", url: "/applications" },
      // { id: "quality-systems", name: "Quality Systems", url: "#" },
      // { id: "supply-chain", name: "Supply Chain", url: "#" },
    ],
  },
  { id: 5, name: "Blog", url: "/blog" },
  { id: 6, name: "Contact Us", url: "/contact" },
];

export const companyLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Services",
    url: "/",
  },
  {
    id: 3,
    name: "About",
    url: "/",
  },
  {
    id: 4,
    name: "Contact",
    url: "/",
  },
  {
    id: 5,
    name: "Quote",
    url: "/",
  },
];

export const proProducts = [
  {
    id: 1,
    name: "PCB Circuit Boards",
    url: "/",
  },
  {
    id: 2,
    name: "PCA",
    url: "/",
  },
  {
    id: 3,
    name: "PCM",
    url: "/",
  },
];

export const industrySolutions = [
  {
    id: 1,
    name: "Environmental Testing",
    url: "/",
  },
  {
    id: 2,
    name: "PCB Inspection",
    url: "/",
  },
  {
    id: 3,
    name: "Energy & Environment",
    url: "/",
  },
];

export const partners = [
  {
    id: 1,
    logo: "/images/svg/partner1.svg",
  },
  {
    id: 2,
    logo: "/images/svg/partner2.svg",
  },
  {
    id: 3,
    logo: "/images/svg/partner3.svg",
  },
  {
    id: 4,
    logo: "/images/svg/partner4.svg",
  },
  {
    id: 5,
    logo: "/images/svg/partner5.svg",
  },
  {
    id: 6,
    logo: "/images/svg/partner6.svg",
  },
  {
    id: 7,
    logo: "/images/svg/partner7.svg",
  },
];
