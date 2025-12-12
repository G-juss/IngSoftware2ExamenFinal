import { Movement } from './Movement.js';

export class Deposit extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return Math.abs(this.amount);
  }

  getColor() {
    return '#22c55e';
  }

  getIcon() {
    return '↓';
  }

  getTypeName() {
    return 'Depósito';
  }
}
