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
        this.search.findNodes(this.query);
        this.router.transitionTo('network');
        break;
    }
  }
}
