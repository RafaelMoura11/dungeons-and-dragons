import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _firstCharacter: Fighter,
    private _monsters: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(_firstCharacter);
  }

  fight(): number {
    this._monsters.forEach((fighter) => {
      while (this._firstCharacter.lifePoints > 0
        && fighter.lifePoints > 0) {
        this._firstCharacter.attack(fighter);
        fighter.attack(this._firstCharacter);
      }
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}