/**
 *  LocationComponent which renders individual fish objects as HTML
 */
const LocationComponent = (location) => {
  return `
      <div class="location">
      <div>
      <img class="location__image" src="${location.image}" alt="">
  </div>
          <div class="location__city">${location.City}</div>
          <div class="location__country">${location.Country}</div>
      </div>
  `
}

export default LocationComponent