import Model, { attr } from '@ember-data/model';

export default class NodeItemModel extends Model {
  @attr('string') name;
  @attr('string') master;
  @attr('string') area;
  @attr('string') path;
  @attr('string') vendor;
  @attr('string') model;
  @attr('string') linkTo;
  @attr('string') country;
  @attr('number') frequency;
  @attr('string') width;
}
