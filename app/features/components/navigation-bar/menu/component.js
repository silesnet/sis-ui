import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  @tracked
  isOpen = false;

  @action
  keyPress(event) {
    switch(event.key) {
      case 'Escape': 
        event.stopPropagation();
        event.preventDefault();
        this.isOpen = false;
        break;
      case 'Enter':
        // this.reset();
        break;
    }
  }
}
