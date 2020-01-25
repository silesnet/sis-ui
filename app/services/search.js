import Service from '@ember/service';
import { resolve } from 'rsvp';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'sis-ui/config/environment';

export default class extends Service {
  @service store;
  @tracked query;
  @tracked answer;

  findNodes(query) {
    this.query = query;
    return this.store.query('node', { q: query })
    .then(nodes => {
      this.answer = nodes.toArray();
      return nodes;
    });
  }
}
