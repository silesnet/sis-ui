import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
// eslint-disable-next-line
import { addObserver } from '@ember/object/observers';

export default class extends Component {
  @service search;
  @service router;
  @tracked hasFocus = false;
  @tracked isMouseOver = false;
  @tracked query = null;

  constructor() {
    super(...arguments);
    addObserver(this.search, 'queryValue', this, 'updateLocalQuery');
  }

  updateLocalQuery() {
    if (this.inputElement) {
      this.inputElement.value = this.search.queryValue;
    }
  }

  get showResetButton() {
    return !!this.query && (this.hasFocus || this.isMouseOver);
  }

  @action
  reset() {
    this.query = null;
    this.inputElement.focus();
  }

  @action
  keyPress(event) {
    switch (event.key) {
      case 'Escape':
        event.stopPropagation();
        event.preventDefault();
        this.reset();
        break;
      case 'Enter':
        const query = this.query
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
        // this.search.findNodes(this.query);
        // TODO prepare query params from query and only transition
        this.router.transitionTo('network', { queryParams: query });
        break;
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
