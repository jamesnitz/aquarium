import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlights.js'
import addMouseOverEventListenersAside from './asidehighlights.js'

import FishListComponent from './Fish/FishList.js'
import TipListComponent from './Tips/TipList.js'

FishListComponent()
TipListComponent()
initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverEventListenersAside()