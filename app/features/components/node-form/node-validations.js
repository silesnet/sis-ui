import { validatePresence } from 'ember-changeset-validations/validators';
import validateNameUniqueness from './unique-node-name-validator';

export default {
  name: [validatePresence(true), validateNameUniqueness()],
};
