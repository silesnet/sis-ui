import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

import { inject as service } from '@ember/service';

export default class extends Route.extend(ApplicationRouteMixin) {
  @service currentUser;

  beforeModel() {
    return this._loadCurrentUser();
  }

  redirect() {
    this.transitionTo('network');
  }

  async sessionAuthenticated() {
    const _super = this._super;
    await this._loadCurrentUser();
    _super.call(this, ...arguments);
  }

  _loadCurrentUser() {
    return this.currentUser.load().catch(() => {
      this.session.invalidate();
    });
  }
}
