import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class extends Component {
  @service search;

  get answer() {
    return this.search.answer;
  }

  get query() {
    return this.search.query;
  }
}
