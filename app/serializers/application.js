import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class extends JSONAPISerializer {
  keyForAttribute(attr) {
    return attr;
  }
}