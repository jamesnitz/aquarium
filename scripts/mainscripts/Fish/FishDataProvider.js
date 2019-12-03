const fishCollection = [
  {
    name: "Bubbles",
    species: "Goldfish",
    length: 3,
    food: ["flakes", "plankton"],
    location: "fishbowl",
    image: "./css/goldie-fish.jpg"
  },
  {
    name: "Bruce",
    species: "Great White Shark",
    length: 25,
    food: ["people", "tires"],
    location: "beaches of New Jersey",
    image: "./css/bruce.gif"
  },
  {
    name: "Marlin",
    species: "marlin",
    length: 10,
    food: ["red fish", "blue fish"],
    location: "Atlantic",
    image: "./css/marlin.jpg"
  },
  {
    name: "Cee-Lo-Blue",
    species: "Coelacanth",
    length: 6,
    food: ["ancient fish", "prehistoric fish"],
    location: "ancient waters",
    image: "./css/coel.jpg"
  },
  {
    name: "Bitey",
    species: "Goliath Tigerfish",
    length: 7,
    food: ["souls", "happiness"],
    location: "Amazon river",
    image: "./css/teef.jpg"
  },
  {
    name: "Sturgill",
    species: "Sturgeon",
    length: 4,
    food: ["small fish", "smaller fish"],
    location: "North American lakes",
    image: "./css/sturg.jpg"
  }
]


export const mostHolyFish = () => {
  let holyFish = [];
  for (const fish of fishCollection) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }
  return holyFish
}

export const soldierFish = () => {
  let soldiers = []
  for (const fish of fishCollection) {
    if (fish.length % 5 === 0) {
      soldiers.push(fish);
    }
  }
  return soldiers
}


export const nonHolyFish = () => {
  let regularFish = []
  for (const fish of fishCollection) {
    if (!(fish.length % 5 === 0) && !(fish.length % 3 === 0)) {
      regularFish.push(fish);
    }
  }
  return regularFish
}