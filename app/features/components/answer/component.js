import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {
  @service search;

  get answer() {
    return this.search.answer;
  }

  @action
  findLinkTo(node) {
    this.search.findNodes(`l.${node}`);
  }
}
