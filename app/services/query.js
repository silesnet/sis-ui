import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import EventEmitter from 'eventemitter3';

export default class QueryService extends Service {
  @tracked value;
  @tracked isFocused;

  events = new EventEmitter();

  update(current) {
    if (this.value !== current) {
      const late = this.value;
      this.value = current;
      this.events.emit('update', current, late);
    }
  }

  submit(current) {
    this.update(current);
    this.events.emit('submit', this.value);
  }

  focus() {
    this.events.emit('focus');
  }

  suggest(suggestions) {
    this.events.emit('suggest', suggestions);
  }
}
