import { helper } from '@ember/component/helper';

export default helper(function odd([number] /*, hash*/) {
  return +number % 2;
});
