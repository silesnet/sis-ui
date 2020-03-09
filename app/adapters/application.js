import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'sis-ui/config/environment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.apiRootURL;
  @service session;

  @computed get headers() {
    const accessToken = this.session.data.authenticated.accessToken;
    return { Authorization: `Bearer ${accessToken}` };
  }
}
