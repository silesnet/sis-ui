import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NetworkNodeRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('node', params.name);
  }

  @action
  update(changeset) {
    if (changeset.isDirty && changeset.isValid) {
      console.log('saving changes', changeset.changes);
      // changeset.save().then(
      // () => {},
      // this.transitionTo('network', { queryParams: {} }).then(
      //   () => console.log('tranistioned'),
      //   (err) => console.log('error on transition', err),
      // ),
      // );
    }
  }
}
