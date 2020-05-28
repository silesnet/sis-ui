import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import QueryTemplate from '../../helpers/query-template';

export default class extends Route {
  @service store;
  @service query;

  queryParams = {
    name: { refreshModel: true },
    master: { refreshModel: true },
    area: { refreshModel: true },
    linkTo: { refreshModel: true },
    vendor: { refreshModel: true },
    country: { refreshModel: true },
  };

  queryTemplate = new QueryTemplate({
    name: 'n?',
    master: 'm',
    area: 'a',
    linkTo: 'l',
    vendor: 'v',
    country: 'c',
  });

  model(params) {
    if (Object.values(params).every((param) => !param)) {
      return undefined;
    }
    return this.store.query('node-item', params);
  }

  afterModel(model) {
    if (model && !this.queryTemplate.equals(model.query, this.query.value)) {
      this.query.update(this.queryTemplate.toString(model.query));
    }
  }
}
