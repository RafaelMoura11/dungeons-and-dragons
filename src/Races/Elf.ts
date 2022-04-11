import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    name: string,
    number: number,
  ) {
    super(name, number);
    this._maxLifePoints = 99;
    Elf.addCreatedRacesInstances();
  }

  static addCreatedRacesInstances() {
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
