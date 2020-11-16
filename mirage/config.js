import Mirage from 'ember-cli-mirage';

const accessToken = '1234567890';

export default function() {
  this.namespace = '';
  this.timing = 0;

  this.patch('/networks/nodes/:id');
  this.post('/networks/nodes');

  this.get('/networks/nodes/:name', ({ nodes }, { params }) => {
    return nodes
      .all()
      .filter((node) => node.id === params.name || node.name === params.name)
      .models[0];
  });

  this.get('/networks/node-items', ({ nodes }, { queryParams }) =>
    nodes.all().filter((node) =>
      ['name', 'master', 'area', 'linkTo', 'vendor', 'country']
        .map((prop) => match(node[prop], queryParams[prop]))
        .filter((match) => match !== undefined)
        .reduce(
          (acc, match, index) => (index === 0 ? true : acc) && match,
          false,
        ),
    ),
  );

  this.get('/networks/nodes/options', ({ nodeOptions }) =>
    nodeOptions.find('nodes.options'),
  );

  this.post('/auth/token', (schema, { requestBody }) => {
    const sessionId = JSON.parse(requestBody).sessionId;
    if (sessionId) {
      return {
        accessToken,
      };
    } else {
      return new Mirage.Response(401);
    }
  });

  this.get('/users/session', (schema, request) => {
    const authorization = request.requestHeaders.authorization || '';
    const token = authorization.split(' ')[1];
    if (accessToken !== token) {
      return new Mirage.Response(403);
    }
    return {
      login: 'ikaleta',
      fullName: 'Ivo Kaleta',
      division: 'CZ',
      roles: ['ROLE_USER'],
    };
  });
}

const match = (value, query) => {
  if (!value || !query) {
    return undefined;
  }
  return query[query.length - 1] === '*'
    ? value
        .toLowerCase()
        .startsWith(query.substring(0, query.length - 1).toLowerCase())
    : value.toLowerCase() === query.toLowerCase();
};
