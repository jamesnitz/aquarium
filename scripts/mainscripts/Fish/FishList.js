/**
 *  FishListComponent which renders individual fish objects as HTML
 */
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"

//import the fish ordering arrays


// Import `useFish` from the data provider module

const FishListComponent = () => {

  // Get a reference to the `<article class="fishList">` element
  const contentElement = document.querySelector(".fishList")
  const holyfishes = mostHolyFish()
  const soldierfishes = soldierFish()
  const regfishes = nonHolyFish()

  
  
  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishList">
         ${
           holyfishes.map(
             (currentFish) => {
             return FishComponent(currentFish)
         }
           ).join(" ")
        }
        ${
          soldierfishes.map(
            (currentFish) => {
            return FishComponent(currentFish)
        }
          ).join(" ")
       }
       ${
        regfishes.map(
          (currentFish) => {
          return FishComponent(currentFish)
      }
        ).join(" ")
     }
      </section>
  `
}

export default FishListComponent
