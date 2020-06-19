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

  get errorsJson() {
    return JSON.stringify(this.changeset.error, null, 2);
  }

  get changesetJson() {
    return JSON.stringify(this.changeset.change, null, 2);
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

  get links() {
    return [
      '<není>',
      'root',
      'root2',
      'tesin',
      'frydek',
      'cieszyn',
      'polni',
      'slezska',
      'tovarni',
      'krotka',
      'polni-25',
      'polni-50',
      'slezska-20',
      'tovarni-12',
      'krotka-39',
    ];
  }

  get areas() {
    return [
      'nix',
      'pl-nix',
      'tesin',
      'frydek',
      'cieszyn',
      'polni',
      'slezska',
      'tovarni',
      'krotka',
    ];
  }

  get vendors() {
    return ['<není>', 'TP-Link', 'Mimosa', 'Ubiquiti'];
  }

  get models() {
    return [
      '<není>',
      'TL-SG3210 1.0',
      'TL-WR840N',
      'B24',
      'PowerBeam M5 400 - 25 dBi',
      'NanoStation loco M5 Built in - 13 dBi',
      'PowerBeam M2 400 - 18 dBi',
      'NanoBeam M5 Built in - 16 dBi',
    ];
  }

  get monitorings() {
    return ['NONE', 'PING', 'PING-SMS'];
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
