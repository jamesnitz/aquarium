/**
 *  LocationComponent which renders individual location objects as HTML
 */
const LocationComponent = (location) => {
  const locationName = location.name.split(" ").join("--")
  
  return `
      <div class="location">
      <div>
      <img class="location__image" src="${location.image}" alt="">
      </div>
      <div class="location__name">${location.name}</div>
      <button id="button--${locationName}">Details</button>
      <dialog class="dialog--location" id="details--${location.name}">
      <div class="location__city">${location.City}</div>
      <div class="location__country">${location.Country}</div>
      <button class="button--close">Close Dialog</button>
      </div>
  `
}

export default LocationComponent