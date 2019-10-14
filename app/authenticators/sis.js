import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import { resolve } from 'rsvp';

export default class extends BaseAuthenticator {
  authenticate() {
    return resolve(undefined);
  }

  restore() {
    return resolve(undefined);
  }

  invalidate() {
    return resolve(undefined);
  }
}
