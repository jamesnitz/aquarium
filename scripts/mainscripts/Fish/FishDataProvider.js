const fishCollection = [
  {
      name: "Bubbles",
      species: "Goldfish",
      length: "2cm",
      food: ["flakes", "plankton"],
      location: "fishbowl",
      image: "./css/goldie-fish.jpg"
  },
  {
    name: "Bruce",
    species: "Great White Shark",
    length: "25 feet",
    food: ["people", "tires"],
    location: "beaches of New Jersey",
    image: "./css/bruce.gif"
  },
  {
    name: "Marlin",
    species: "marlin",
    length: "10 feet",
    food: ["red fish", "blue fish"],
    location: "Atlantic",
    image: "./css/marlin.jpg"
  },
  {
    name: "Cee-Lo-Blue",
    species: "Coelacanth",
    length: "4 feet",
    food: ["ancient fish", "prehistoric fish"],
    location: "ancient waters",
    image: "./css/coel.jpg"
  },
  {
    name: "Bitey",
    species: "Goliath Tigerfish",
    length: "6 feet",
    food: ["souls", "happiness"],
    location: "Amazon river",
    image: "./css/teef.jpg"
  },
  {
    name: "Sturgill",
    species: "Sturgeon",
    length: "4 feet",
    food: ["small fish", "smaller fish"],
    location: "North American lakes",
    image: "./css/sturg.jpg"
  }
]


export const useFish = () => {
  return fishCollection
}