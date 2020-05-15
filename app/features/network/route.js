import Route from '@ember/routing/route';

export default class extends Route {
  queryParams = {
    name: {
      refreshModel: true,
      replace: true,
    },
    master: {
      refreshModel: true,
    },
    area: {
      refreshModel: true,
    },
    linkTo: {
      refreshModel: true,
    },
    vendor: {
      refreshModel: true,
    },
    country: {
      refreshModel: true,
      replace: true,
    },
  };

  model(params) {
    console.log('model', arguments);

    return params;
  }

  setupController(controller, params) {
    console.log('setup', params);
    controller.performSearch();
  }
}
