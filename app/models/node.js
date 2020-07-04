import Model, { attr } from '@ember-data/model';

export default class NodeModel extends Model {
  @attr country;
  @attr name;
  @attr type;
  @attr master;
  @attr linkTo;
  @attr area;
  @attr vendor;
  @attr model;
  @attr info;
  @attr monitoring;
  @attr path;
  @attr ping;
  @attr isWireless;
  @attr polarization;
  @attr width;
  @attr norm;
  @attr tdma;
  @attr aggregation;
  @attr ssid;
  @attr frequency;
  @attr power;
  @attr antenna;
  @attr wds;
  // db has it as 'auth'
  @attr authorization;
  @attr azimuth;
  @attr active;
}
