import { Deposit } from '../models/Deposit.js';
import { Withdrawal } from '../models/Withdrawal.js';
import { Transfer } from '../models/Transfer.js';
import { Payment } from '../models/Payment.js';

class MovementFactory {
  constructor() {
    this.movementTypes = new Map([
      ['deposit', Deposit],
      ['withdrawal', Withdrawal],
      ['transfer', Transfer],
      ['payment', Payment]
    ]);
  }

  register(type, MovementClass) {
    if (typeof MovementClass !== 'function') {
      throw new Error(`Invalid movement class for type: ${type}`);
    }
    this.movementTypes.set(type, MovementClass);
  }

  create(data) {
    const { type } = data;
    
    const MovementClass = this.movementTypes.get(type);
    
    if (!MovementClass) {
      throw new Error(
        `Unknown movement type: ${type}. Available types: ${Array.from(
          this.movementTypes.keys()
        ).join(', ')}`
      );
    }

    return new MovementClass(data);
  }

  getAvailableTypes() {
    return Array.from(this.movementTypes.keys());
  }
}

const movementFactory = new MovementFactory();

export default movementFactory;