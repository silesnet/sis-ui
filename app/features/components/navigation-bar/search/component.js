import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  @tracked hasFocus = false;
  @tracked isMouseOver = false;
  @tracked query = null;

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
    switch(event.key) {
      case 'Escape': 
        event.stopPropagation();
        event.preventDefault();
        this.reset();
        break;
      case 'Enter':
        // this.reset();
        break;
    }
  }
}