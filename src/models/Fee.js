import { Movement } from './Movement.js';

export class Fee extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getColor() {
    return '#8b5cf6';
  }

  getIcon() {
    return '💰';
  }

  getTypeName() {
    return 'Comisión';
  }
}