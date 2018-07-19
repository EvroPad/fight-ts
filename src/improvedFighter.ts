// Create class ImprovedFighter
import Fighter from "./fighter";

export default class ImprovedFighter extends Fighter {
    public doubleHit(enemy, point: number) {
        super.hit(enemy, point * 2);
    }
}
