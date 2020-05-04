import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default class extends Route.extend(ApplicationRouteMixin) {
  @service session;
  @service currentUser;
  @service cookies;

  beforeModel() {
    return this._logIn().then(this._loadCurrentUser());
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

  _logIn() {
    const sessionId = this.cookies.read().JSESSIONID || 'TEST_SESSION_ID';
    return this.session.authenticate('authenticator:sis', sessionId);
  }
}
