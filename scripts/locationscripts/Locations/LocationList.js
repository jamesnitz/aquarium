/**
 *  FishListComponent which renders individual fish objects as HTML
 */
import { useLocation } from "./LocationDataProvider.js"
import LocationComponent from "./Location.js"

// Import `LocationFish` from the data provider module

const LocationListComponent = () => {


  // Get a reference to the `<article class="locationList">` element
  const contentElement = document.querySelector(".locationList")
  const locations = useLocation()

  

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      
         ${
           locations.map(
             (location) => {
           return LocationComponent(location)
         }
        ).join(" ")
        }
  `
}

export default LocationListComponent