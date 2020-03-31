import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

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

export default class extends Service {
  @service store;
  @tracked queryValue;
  @tracked query;
  @tracked answer;

  findNodes(query) {
    this.queryValue = query;
    this.query = query
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
    return this.store.query('node', this.query).then((nodes) => {
      this.answer = nodes.toArray();
      return nodes;
    });
  }
}
