import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _firstCharacter: Fighter,
    private _secondCharacter: Fighter,
  ) {
    super(_firstCharacter);
  }

  fight(): number {
    while (this._firstCharacter.lifePoints > 0
      && this._secondCharacter.lifePoints > 0) {
      this._firstCharacter.attack(this._secondCharacter);
      this._secondCharacter.attack(this._firstCharacter);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}