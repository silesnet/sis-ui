import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class extends Component {
  @service search;

  get answer() {
    return this.search.answer;
  }

  get query() {
    return this.search.query;
  }
  
}