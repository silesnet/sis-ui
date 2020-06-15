import Component from '@glimmer/component';
import { action } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import NodeValidations from './node-validations';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  @tracked changeset;

  constructor() {
    super(...arguments);
    this.changeset = new Changeset(
      this.args.node,
      lookupValidator(NodeValidations),
      NodeValidations,
    );
    this.snapshot = this.changeset.snapshot();
  }

  get disableSubmit() {
    return this.changeset.isInvalid || this.changeset.isPristine;
  }

  get errors() {
    return this.changeset.error;
  }

  get errorsJson() {
    return JSON.stringify(this.changeset, null, 2);
  }

  get types() {
    return [
      'OTHER',
      'ROUTER',
      'BRIDGE',
      'BRIDGE-AP',
      'BRIDGE-BR',
      'BRIDGE-STATION',
      'SWITCH',
    ];
  }

  get masters() {
    return ['<není>', 'tesin', 'tovarni', 'cieszyn'];
  }

  @action
  addMaster(master) {
    return !this.masters.includes(master);
  }

  @action
  createMaster(master) {
    console.log('creating maseter', master);
    this.changeset.master = master;
  }

  @action
  submit() {
    this.args.onSubmit(this.changeset);
  }

  @action
  keyPress(event) {
    switch (event.key) {
      case 'Escape':
        event.stopPropagation();
        event.preventDefault();
        this.changeset.restore(this.snapshot);
        break;
      case 'Enter':
        break;
    }
  }
}
