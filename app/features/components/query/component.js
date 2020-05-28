import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
// eslint-disable-next-line
import { addObserver } from '@ember/object/observers';

export default class extends Component {
  @service router;
  @service('query') queryService;

  @tracked hasFocus = false;
  @tracked isMouseOver = false;
  @tracked value = this.queryService.value;

  constructor() {
    super(...arguments);
    this.queryService.events.on('update', (current, late) => {
      this.value = current;
    });
  }

  get showResetButton() {
    return !!this.value && (this.hasFocus || this.isMouseOver);
  }

  @action
  update(event) {
    this.queryService.update(event.target.value);
  }

  @action
  reset() {
    this.value = null;
    this.inputElement.focus();
  }

  @action
  keyPress(event) {
    switch (event.key) {
      case 'Escape':
        event.stopPropagation();
        event.preventDefault();
        this.reset();
        this.queryService.update(this.value);
        break;
      case 'Enter':
        this.queryService.submit(this.value);
        break;
    }
  }
}
