interface IFighter {
    setDamage(damage: number): void;
    hit(enemy, point: number): void;
  }

export default class Fighter implements IFighter {
    constructor(public name: string = "Russian Ivan", public health: number = 1000, public power: number = 2) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    public setDamage(damage: number) {
      this.health = this.health - damage;
      console.log(`${this.name}: ${this.health}`);
    }
  
    public hit(enemy, point: number) {
      const damage = point * this.power;
      enemy.setDamage(damage);
    }
  
    protected knockout(): Promise<void> {
      return new Promise<void> ((resolve) => {
        setTimeout(() => {
          console.log("time is over");
          resolve();
        }, 500);
      });
    }
  }
