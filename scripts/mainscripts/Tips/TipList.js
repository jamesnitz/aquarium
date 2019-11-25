/**
 *  FishListComponent which renders individual fish objects as HTML
 */
import { useTip } from './TipDataProvider.js'
import TipComponent from './Tip.js'

// Import `useTip` from the data provider module

const TipListComponent = () => {

  // Get a reference to the `<article class="tipList">` element
  const contentElement = document.querySelector(".tipList")
  const tips = useTip()


  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      
         ${
           tips.map(
            (currentTip) => {
              return TipComponent(currentTip)
            } 
           ).join(" ")
         }
      
  `
}

export default TipListComponent
