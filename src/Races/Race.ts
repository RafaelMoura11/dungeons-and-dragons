export default abstract class Race {
  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) {
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}
