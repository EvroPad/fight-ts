import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";
import fight from "./fight";

// create two instances
const fighter: object = new Fighter();
const improvedFighter: object = new ImprovedFighter("Marsian PigHruck", 500, 5);

// call fight function
fight(fighter, improvedFighter, 25, 13, 45, 20);
