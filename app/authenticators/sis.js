import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import { resolve, reject } from 'rsvp';
import fetch from 'fetch';
import ENV from 'sis-ui/config/environment';

export default class extends BaseAuthenticator {
  async authenticate(sessionId = null) {
    const response = await fetch(`${ENV.apiRootURL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId: sessionId }),
    });
    if (!response.ok) {
      return reject('Authentication failed.');
    }
    return response.json();
  }

  restore() {
    return reject(undefined);
  }

  invalidate() {
    return resolve(undefined);
  }
}
