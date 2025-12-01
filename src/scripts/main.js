// Imports go first
// import { makePottery } from "./PotteryWheel.js"

import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"

// import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 7, 7)
//console.log(mug)

let vase = makePottery("Vase", 8, 7)
//console.log(vase)

let bowl = makePottery("Bowl", 10, 4)
//console.log(bowl)

let tray = makePottery("Tray", 5, 5)
//console.log(tray)

let cup = makePottery("Cup", 3, 3)
//console.log(cup)

// Fire each piece of pottery in the kiln
firePottery(mug, 2000)
//console.log(cookMug)

firePottery(vase, 1900)
//console.log(cookVase)

firePottery(bowl, 2100)
//console.log(cookBowl)

firePottery(tray, 2200)
//console.log(cookTray)

firePottery(cup, 1900)
//console.log(cookCup)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)

toSellOrNotToSell(vase)

toSellOrNotToSell(bowl)

toSellOrNotToSell(tray)

toSellOrNotToSell(cup)

//console.log(usePot())
// Invoke the component function that renders the HTML list
//When I was working on this I was having a lot of trouble understanding this part of the code and the HTML
//so I had to ask claude to explain using simple pointers but I'm still having a bit of a struggle understanding and
//need an instructor to explain in further.
const potHTMl = potteryList()
const potListElement = document.querySelector('.potteryList')
potListElement.innerHTML = potHTMl
