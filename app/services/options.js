import Service from '@ember/service';
import { resolve } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import ENV from 'sis-ui/config/environment';
import { camelize } from '@ember/string';

export default class extends Service {
  @service session;
  @tracked values = {
    networks: {
      nodes: {},
    },
  };

  load() {
    const accessToken = this.session.data.authenticated.accessToken;
    if (accessToken) {
      return fetch(`${ENV.apiRootURL}/networks/nodes/options`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to load node options.');
          }
          return response.json();
        })
        .then((body) => {
          this.values.networks.nodes = Object.entries(
            body.data.attributes,
          ).reduce((options, [key, value]) => {
            options[camelize(key)] = value;
            return options;
          }, {});
          return this.values;
        });
    }
    return resolve(undefined);
  }
}
