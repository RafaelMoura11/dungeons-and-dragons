import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    name: string,
    number: number,
  ) {
    super(name, number);
    this._maxLifePoints = 74;
    Orc.addCreatedRacesInstances();
  }

  static addCreatedRacesInstances() {
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
