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

  // coded
  get polarizations() {
    return ['HORIZONTAL', 'VERTICAL', 'DUAL'];
  }

  get channelWidths() {
    return [
      '5 MHz',
      '10 MHz',
      '14 MHz',
      '20 MHz',
      '28 MHz',
      '30 MHz',
      '40 MHz',
      '500 MHz',
      '2x20 MHz',
    ];
  }

  get norms() {
    return [
      '802.11a',
      '802.11ac',
      '802.11a/n',
      '802.11b',
      '802.11b/g',
      '802.11g',
      '802.11n',
      'B/G',
      '10GHz',
      '24GHz',
      '60GHz',
    ];
  }

  get frequencies() {
    return [
      '2402',
      '2422',
      '2429',
      '2439',
      '2452',
      '2462',
      '2472',
      '4920',
      '5155',
      '5200',
      '5280',
      '5340',
      '5430',
      '5475',
      '5500',
      '5520',
      '5540',
      '5565',
      '5625',
      '5635',
      '5655',
      '5665',
      '5685',
      '5695',
      '5705',
      '5715',
      '5725',
      '5880',
      '10350',
      '10406',
      '10518',
      '10574',
      '24010',
      '24040',
      '24100',
    ];
  }

  get authorizations() {
    return ['NONE', 'BOTH', 'MAC', 'RADIUS'];
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
