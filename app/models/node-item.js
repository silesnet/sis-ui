import Model, { attr } from '@ember-data/model';

export default class NodeItemModel extends Model {
  @attr name;
  @attr master;
  @attr area;
  @attr path;
  @attr vendor;
  @attr model;
  @attr linkTo;
  @attr country;
  @attr frequency;
}
