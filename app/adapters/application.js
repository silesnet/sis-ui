import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'sis-ui/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.apiRootURL;
  namespace = 'api';
  authorizer =  'authorizer:oauth2';
}