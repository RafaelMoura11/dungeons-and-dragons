import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energytype = 'mana';
    Mage.addCreatedArchetypeInstances();
  }

  static addCreatedArchetypeInstances() {
    Mage._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energytype;
  }
}