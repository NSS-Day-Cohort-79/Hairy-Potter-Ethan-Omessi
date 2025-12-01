const sellPot = []

export const toSellOrNotToSell = (pot) => 
{
    //In the if statement there is a condition that is saying if pottery isn't cracked. This is done by using !.
    if(!pot.cracked) {
        //In the if statement the condition is if the wight of the pottery piece is greater or equal 6 then the price of the pottery will be 40 dollars.
        if (pot.weight >= 6) 
        {
            pot.price = 40
        }
        //But if the pottery is less then 6 pounds then the pottery piece is priced at 20 dollars.
        else
        {
            pot.price = 20
        }
        //The new price of pot is pushed to the empty array sellPot
        sellPot.push(pot)
    }

    return pot
}
//This function creates a deep copy of the new sellPot
export const usePot = () =>
{
    return structuredClone(sellPot)
}