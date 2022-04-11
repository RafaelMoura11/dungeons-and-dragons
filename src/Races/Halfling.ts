import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    name: string,
    number: number,
  ) {
    super(name, number);
    this._maxLifePoints = 60;
    Halfling.addCreatedRacesInstances();
  }

  static addCreatedRacesInstances() {
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
