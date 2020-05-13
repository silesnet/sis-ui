import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NetworkNodeRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('node', params.name);
  }

  @action
  update(node) {
    node.save().then(() => this.transitionTo('network'));
  }
}
