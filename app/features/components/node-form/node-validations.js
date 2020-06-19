import { validatePresence } from 'ember-changeset-validations/validators';
import validateNameUniqueness from './unique-node-name-validator';

export default {
  name: [validatePresence(true), validateNameUniqueness()],
  type: [validatePresence(true)],
  master: [validatePresence(true)],
  linkTo: [validatePresence(true)], // add validation based on path, can't link to sth below
  area: [validatePresence(true)],
  vendor: [validatePresence(true)],
  model: [validatePresence(true)],
  monitoring: [validatePresence(true)],
};
