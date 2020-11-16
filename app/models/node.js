import Model, { attr } from '@ember-data/model';

export default class NodeModel extends Model {
  @attr('string') country;
  @attr('string') name;
  @attr('string') type;
  @attr('string') master;
  @attr('string') linkTo;
  @attr('string') area;
  @attr('string') vendor;
  @attr('string') model;
  @attr('string') info;
  @attr('string') monitoring;
  @attr('string') path;
  @attr('string') ping;
  @attr('string') polarization;
  @attr('string') width;
  @attr('string') norm;
  @attr('boolean') tdma;
  @attr('boolean') aggregation;
  @attr('string') ssid;
  @attr('string') frequency;
  @attr('string') power;
  @attr('string') antenna;
  @attr('boolean') wds;
  @attr('string') authorization;
  @attr('string') azimuth;
  @attr('boolean') active;
}
