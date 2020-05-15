import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NetworkController extends Controller {
  queryParams = ['name', 'master', 'area', 'linkTo', 'vendor', 'country'];

  @service search;

  @tracked name;
  @tracked master;
  @tracked area;
  @tracked linkTo;
  @tracked vendor;
  @tracked country;

  performSearch() {
    const params = {
      n: this.name,
      m: this.master,
      a: this.area,
      l: this.linkTo,
      v: this.vendor,
      c: this.country,
    };
    console.log(params);
    const query = Object.keys(params)
      .reduce((acc, key) => {
        return !!params[key] ? acc + ` ${key}.${params[key]}` : acc;
      }, '')
      .trim();
    if (query) {
      this.search.findNodes(query);
    }
  }
}
