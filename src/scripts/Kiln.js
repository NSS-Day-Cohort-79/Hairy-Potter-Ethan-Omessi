//Line 3 creates a function call firePottery that exports itself, 
//in the parameter there are two arguments names pot (pottery) and temp (temperature) 
export const firePottery = (pot, temp) => 
{
    //Line 7 acts as a key or pass to the fired property thats value is set to true,
    //This will automatically make it into a boolean due to the true value,
    //I learn this from Dave when he talked to me about kiln (can't remember what this is called exactly)
    pot.fired = true
    
    //Line 12 is a if statement with the condition of "If the temp is over 2200, its cracked",
    //Then on line 17 the else statement it basically saying "If temp is not over 2200. not cracked"
    if (temp > 2200)
    {
        //Line 15 adds the cracked value to pot (pottery) and makes it true (making it a boolean)
        pot.cracked = true
    }
    else
    {
        pot.cracked = false
    }

    //Line 23 returns the new value of pot to firePottery()
    return pot
}