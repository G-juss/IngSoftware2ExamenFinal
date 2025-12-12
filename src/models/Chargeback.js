import { Movement } from './Movement.js';

export class Chargeback extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getColor() {
    return '#ec4899';
  }

  getIcon() {
    return '↩️';
  }

  getTypeName() {
    return 'Contracargo';
  }
}