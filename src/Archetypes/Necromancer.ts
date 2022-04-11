import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energytype = 'mana';
    Necromancer.addCreatedArchetypeInstances();
  }

  static addCreatedArchetypeInstances() {
    Necromancer._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energytype;
  }
}