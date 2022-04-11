import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energytype = 'stamina';
    Warrior.addCreatedArchetypeInstances();
  }

  static addCreatedArchetypeInstances() {
    Warrior._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energytype;
  }
}