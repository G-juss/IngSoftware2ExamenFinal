import movementFactory from './MovementFactory.js';
import { Fee } from '../models/Fee.js';
import { Chargeback } from '../models/Chargeback.js';

movementFactory.register('fee', Fee);
movementFactory.register('chargeback', Chargeback);

export default movementFactory;