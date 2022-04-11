export default abstract class Race {
  readonly _name: string
  readonly _dexterity: number
  static createdRacesInstances = 0

  constructor(name: string, dexterity: number) {
    this._name = name
    this._dexterity = dexterity
    Race.createdRacesInstances++
  }

  abstract maxLifePoints(): number
};
