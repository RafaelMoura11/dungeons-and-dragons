import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  constructor(
    private _name: string,
  ) {}

  name() {
    return this._name;
  }

  special() {
    return this._special;
  }

  cost() {
    return this._cost;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}