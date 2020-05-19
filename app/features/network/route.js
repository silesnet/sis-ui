import Route from '@ember/routing/route';

export default class extends Route {
  queryParams = {
    name: {
      refreshModel: true,
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
    },
  };

  model(params) {
    console.log('network route params', params);
    return params;
  }

  setupController(controller, params) {
    controller.performSearch();
  }
}
