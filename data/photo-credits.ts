/**
 * Attribution for real photography sourced from Wikimedia Commons (spec
 * section 16 — "licensed/commercial images... do not copy another
 * company's images"). All images here are under open licenses that permit
 * commercial use; CC BY-SA entries require attribution, which this file
 * feeds to the /photo-credits page linked from the footer.
 */
export type PhotoCredit = {
  id: string;
  usedFor: string;
  title: string;
  author: string;
  source: string;
  license: string;
};

export const photoCredits: PhotoCredit[] = [
  {
    id: "hero",
    usedFor: "Homepage hero slideshow (slide 1) + hero background",
    title: "Rooftop Solar panels on homes in Mehsana, Gujarat, India",
    author: "Wikimedia Commons contributor",
    source:
      "https://commons.wikimedia.org/wiki/File:Rooftop_Solar_panels_on_homes_in_Mehsana,_Gujarat,_India.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: "residential",
    usedFor: "Residential solution card + homepage hero slideshow (slide 2)",
    title: "Rooftop Solar panels on homes in Mehsana, Gujarat, India (69514)",
    author: "Wikimedia Commons contributor",
    source:
      "https://commons.wikimedia.org/wiki/File:Rooftop_Solar_panels_on_homes_in_Mehsana,_Gujarat,_India_(69514).jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: "commercial",
    usedFor: "Commercial solution card + homepage hero slideshow (slide 3)",
    title: "Solar panels - Hart Senate Office Building - 2015 (cropped)",
    author: "Architect of the Capitol",
    source: "https://commons.wikimedia.org/wiki/File:Solar_panels_-_Hart_Senate_Office_Building_-_2015.jpg",
    license: "Public domain",
  },
  {
    id: "industrial",
    usedFor: "Industrial solution card + homepage hero slideshow (slide 4)",
    title: "Solar farm at Krishnapuram Tatipudi Water Works, aerial view",
    author: "Wikimedia Commons contributor",
    source:
      "https://commons.wikimedia.org/wiki/File:Solar_farm_at_Krishnapuram_Tatipudi_Water_Works_aerial_view_01.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: "institutional",
    usedFor: "Institutional solution card + homepage hero slideshow (slide 5)",
    title: "Murray Elementary School",
    author: "U.S. Army Corps of Engineers",
    source: "https://commons.wikimedia.org/wiki/File:Murray_Elementary_School_140404-A-SL877-2016.jpg",
    license: "Public domain",
  },
  {
    id: "up-map",
    usedFor: "Uttar Pradesh coverage map outline",
    title: "Uttar Pradesh outline shape (simplified, restyled)",
    author: "Wikimedia Commons contributor",
    source: "https://commons.wikimedia.org/wiki/File:Uttar_Pradesh_outline_shape.svg",
    license: "CC BY-SA 4.0",
  },
];
