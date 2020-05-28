export default class QueryTemplate {
  #defaultParam;
  #mapping;

  constructor(mapping) {
    this.#defaultParam = Object.keys(mapping).filter(
      (key) => mapping[key].slice(-1) === '?',
    )[0];
    this.#mapping = { ...mapping };
    if (this.#defaultParam) {
      this.#mapping[this.#defaultParam] = this.#mapping[
        this.#defaultParam
      ].slice(0, -1);
    }
  }

  toString(params) {
    return Object.keys(this.#mapping)
      .reduce((acc, key) => {
        if (!params[key]) {
          return acc;
        }
        if (this.#defaultParam === key) {
          return acc + ' ' + params[key];
        }
        return acc + ' ' + this.#mapping[key] + '.' + params[key];
      }, '')
      .trim();
  }

  toParams(value) {
    return {
      ...this._emptyParams(),
      ...Object.fromEntries(
        value
          .trim()
          .split(/\s+/)
          .map((param) => {
            const [key, value] = this._toKeyValue(param);
            return [this._shortKey(key), value || undefined];
          }),
      ),
    };
  }

  equals(a, b) {
    if (typeof a === 'undefined' && typeof b === 'undefined') {
      return true;
    }
    if (typeof a === 'undefined' || typeof b === 'undefined') {
      return false;
    }
    return this._normalize(a) === this._normalize(b);
  }

  _normalize(query) {
    return typeof query === 'string'
      ? this.toString(this.toParams(query))
      : this.toString(query);
  }

  _emptyParams() {
    return Object.keys(this.#mapping).reduce((acc, key) => {
      acc[key] = undefined;
      return acc;
    }, {});
  }
  _toKeyValue(param) {
    let [key, value] = param.split(/[:.](.+)/);
    if (!value) {
      value = key;
      key = this.#mapping[this.#defaultParam];
    }
    return [key, value];
  }

  _shortKey(key) {
    return Object.keys(this.#mapping).find((it) => this.#mapping[it] === key);
  }
}
