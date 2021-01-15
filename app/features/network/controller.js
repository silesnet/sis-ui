import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NetworkController extends Controller {
  queryParams = ['name', 'master', 'area', 'linkTo', 'vendor', 'country'];

  @service query;
  @service router;

  @tracked name;
  @tracked master;
  @tracked area;
  @tracked linkTo;
  @tracked vendor;
  @tracked country;

  @tracked sortKey = 'name';
  @tracked sortAscending = true;

  get hasContent() {
    return !!this.model;
  }

  get items() {
    return this.sortAscending
      ? this.model.sortBy(this.sortKey)
      : this.model.sortBy(this.sortKey).reverse();
  }

  constructor() {
    super(...arguments);
    this.query.events.on('submit', (query) => {
      const params = query
        .trim()
        .split(/\s+/)
        .map((param) => param.split(/[:.](.+)/))
        .map((parts) => [parts[0], parts[1]])
        .map((pair) =>
          pair[1] ? [paramName(pair[0]), pair[1]] : ['name', pair[0]],
        )
        .reduce((map, pair) => {
          map[pair[0]] = pair[1];
          return map;
        }, {});
      this.name = params.name || undefined;
      this.master = params.master || undefined;
      this.area = params.area || undefined;
      this.linkTo = params.linkTo || undefined;
      this.vendor = params.vendor || undefined;
      this.v = params.vendor || undefined;
      this.country = params.country || undefined;
    });
  }

  @action
  nodeDetail(name) {
    this.router.transitionTo('network.node', name);
  }

  @action
  findLinkTo(node) {
    this.search.findNodes(`l.${node}`);
  }

  @action
  findName(node) {
    this.search.findNodes(`n.${node}`);
  }

  @action
  toggleSortKey(sortKey) {
    if (this.sortKey === sortKey) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortKey = sortKey;
      this.sortAscending = true;
    }
  }

  performSearch() {
    const params = {
      n: this.name,
      m: this.master,
      a: this.area,
      l: this.linkTo,
      v: this.vendor,
      c: this.country,
    };
    const query = Object.keys(params)
      .reduce((acc, key) => {
        return params[key] ? acc + ` ${key}.${params[key]}` : acc;
      }, '')
      .trim();
    if (query) {
      this.search.findNodes(query);
    }
  }
}

function paramName(prefix) {
  switch (prefix) {
    case 'n':
      return 'name';
    case 'm':
      return 'master';
    case 'a':
      return 'area';
    case 'l':
      return 'linkTo';
    case 'v':
      return 'vendor';
    case 'c':
      return 'country';
    default:
      return prefix;
  }
}
