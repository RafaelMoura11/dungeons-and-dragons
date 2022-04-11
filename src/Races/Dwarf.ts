import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    name: string,
    number: number,
  ) {
    super(name, number);
    this._maxLifePoints = 80;
    Dwarf.addCreatedRacesInstances();
  }

  static addCreatedRacesInstances() {
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
