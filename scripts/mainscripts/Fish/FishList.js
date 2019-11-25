/**
 *  FishListComponent which renders individual fish objects as HTML
 */
import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"

// Import `useFish` from the data provider module

const FishListComponent = () => {

  // Get a reference to the `<article class="fishList">` element
  const contentElement = document.querySelector(".fishList")
  const fishes = useFish()

  

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishList">
         ${
           fishes.map(
             (currentFish) => {
             return FishComponent(currentFish)
         }
           ).join(" ")
        }
      </section>
  `
}

export default FishListComponent
