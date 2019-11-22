import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlights.js'
import addMouseOverEventListenersAside from './asidehighlights.js'
import { useFish } from './FishDataProvider.js'


initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverEventListenersAside()
const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)

for (const fish of allOfTheFish){
  console.log("individual fish object:", fish)
}