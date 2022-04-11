import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energytype = 'stamina';
    Ranger.addCreatedArchetypeInstances();
  }

  static addCreatedArchetypeInstances() {
    Ranger._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energytype;
  }
}