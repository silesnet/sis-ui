import Service from '@ember/service';
import { resolve } from 'rsvp';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class extends Service {
  @service session;
  @tracked user = undefined;

  load() {
    if (this.session.isAuthenticated) {
      return fetch('/users/current?session=test').then((response) => {
        return response.json().then((body) => {
          this.user = {
            login: body.users.user,
            fullName: body.users.full_name,
          };
        });
      });
    } else {
      return resolve(undefined);
    }
  }
}
