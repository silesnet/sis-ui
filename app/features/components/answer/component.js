import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {
  @service search;
  @service router;

  get answer() {
    return this.search.answer;
  }

  @action
  nodeDetail(name) {
    this.router.transitionTo('network.node', name);
  }

  @action
  findLinkTo(node) {
    this.search.findNodes(`l.${node}`);
  }

  @action
  findName(node) {
    this.search.findNodes(`n.${node}`);
  }
}
