// create async function fight
async function fight(fighter, improvedFighter, ...points) {
    const { length } = points;
  
    for (let i = 0; i < length; i++) {
      if (fighter.health < 0) {
        break;
      }
      fighter.hit(improvedFighter, points[i]);
      if (improvedFighter.health < 0) {
        break;
      }
      improvedFighter.doubleHit(fighter, points[i]);
    }
  
    switch (true) {
      case fighter.health < 0:
        console.log(`${fighter.name} in knockout`);
        await fighter.knockout();
        console.log(`${improvedFighter.name} won!`);
        break;
      case improvedFighter.health < 0:
        console.log(`${improvedFighter.name} in knockout`);
        await improvedFighter.knockout();
        console.log(`${fighter.name} won!`);
        break;
      default:
        console.log("Draw!");
    }
  }
  
  export default fight;