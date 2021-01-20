import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class NetworkNodeRoute extends Route {
  @service store;

  model(params) {
    if (params.name === 'create') {
      return RSVP.hash({
        node: this.store.createRecord('node'),
        children: [],
      });
    }
    return this.store.findRecord('node', params.name).then((node) =>
      RSVP.hash({
        node: node,
        children: this.store.query('node-item', { linkTo: node.name }),
      }),
    );
  }

  @action
  save(changeset) {
    if (changeset.isDirty && changeset.isValid) {
      changeset
        .save()
        .then(() => this.transitionTo('network', { queryParams: {} }));
    }
  }

  @action
  delete(changeset) {
    changeset
      .get('data')
      .destroyRecord()
      .then(() => this.transitionTo('network', { queryParams: {} }));
  }
}
