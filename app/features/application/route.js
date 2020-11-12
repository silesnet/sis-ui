import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default class extends Route.extend(ApplicationRouteMixin) {
  @service session;
  @service currentUser;
  @service cookies;
  @service options;

  beforeModel() {
    return this._logIn().then(this.currentUser.load());
  }

  redirect(model, transition) {
    if (transition.to.name === 'index') {
      this.transitionTo('network');
    }
  }

  async sessionAuthenticated() {
    const _super = this._super; // eslint-disable-line
    await this.currentUser.load();
    await this.options.load();
    _super.call(this, ...arguments);
  }

  _logIn() {
    const sessionId = this.cookies.read().JSESSIONID || 'TEST_SESSION_ID';
    return this.session.authenticate('authenticator:sis', sessionId);
  }
}
