import Component from '@glimmer/component';
import { action } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import NodeValidations from './node-validations';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class extends Component {
  @service('options') appOptions;
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

  get isWireless() {
    return (
      'BRIDGE-AP' === this.changeset.type || 'BRIDGE-BR' === this.changeset.type
    );
  }

  get disableSubmit() {
    return this.changeset.isInvalid || this.changeset.isPristine;
  }

  get errorsJson() {
    return JSON.stringify(this.changeset.error, null, 2);
  }

  get changesetJson() {
    return JSON.stringify(this.changeset.change, null, 2);
  }

  get options() {
    return this.appOptions.values.networks.nodes;
  }

  @action
  selectNotFoundValue(select, event) {
    if (event.key === 'Enter') {
      select.actions.select(select.searchText);
    }
  }

  @action
  submit() {
    this.changeset.validate();
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
