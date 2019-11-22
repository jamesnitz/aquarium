const fishCollection = [
  {
      name: "Mr. Bubbles",
      type: "Goldfish",
      length: "2cm",
      diet: "flakes",
      location: "fishbowl",
      image: "./css/goldie-fish.jpg"
  },
  {
    name: "Bruce",
    type: "Great White Shark",
    length: "25 feet",
    diet: "humans",
    location: "beaches of New Jersey",
    image: "./css/bruce.gif"
  },
  {
    name: "Marlin",
    type: "marlin",
    length: "10 feet",
    diet: "fish",
    location: "Atlantic",
    image: "./css/marlin.jpg"
  },
  {
    name: "Cee-Lo-Blue",
    type: "coelacanth",
    length: "4 feet",
    diet: "prehistoric fish",
    location: "ancient waters",
    image: "./css/coel.jpg"
  },
  {
    name: "Big Teef",
    type: "goliath Tigerfish",
    length: "6 feet",
    diet: "small people",
    location: "Amazon river",
    image: "./css/teef.jpg"
  },
  {
    name: "Sturgill Sturgeon",
    type: "Sturgeon",
    length: "4 feet",
    diet: "kelp",
    location: "North American lakes",
    image: "./css/sturg.jpg"
  }
]


export const useFish = () => {
  return fishCollection
}