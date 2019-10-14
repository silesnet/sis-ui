import Service from '@ember/service';
import { resolve } from 'rsvp';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class extends Service {
  @service session;
  @tracked user = undefined;

  load() {
    const accessToken = this.session.data.authenticated.accessToken;
    if (accessToken) {
      return fetch('/api/users/session', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to load user profile.');
          }
          return response.json();
        })
        .then((body) => {
          this.user = { ...body };
        });
    }
    return resolve(undefined);
  }
}
