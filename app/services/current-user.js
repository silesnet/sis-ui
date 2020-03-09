import Service from '@ember/service';
import { resolve } from 'rsvp';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';
import ENV from 'sis-ui/config/environment';

export default class extends Service {
  @service session;
  @tracked user = undefined;

  load() {
    const accessToken = this.session.data.authenticated.accessToken;
    if (accessToken) {
      return fetch(`${ENV.apiRootURL}/users/session`, {
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
          return this.user;
        });
    }
    return resolve(undefined);
  }
}
