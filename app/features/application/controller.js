import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class extends Controller {
  @service session;
  @service currentUser;
  @service cookies;

  @action
  logIn() {
    const sessionId = this.cookies.read().JSESSIONID || 'test';
    this.session.authenticate('authenticator:sis', sessionId);
  }

  @action
  logOut() {
    this.session.invalidate();
  }
}
