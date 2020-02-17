import Mirage from 'ember-cli-mirage';

const accessToken = '1234567890';

export default function() {
  this.namespace = 'api';
  this.timing = 0;

  this.get('/networks/nodes', (schema, { queryParams }) => {
    return schema.nodes
      .all()
      .filter(
        (node) =>
          node.name.startsWith(queryParams.name || '') &&
          node.master.startsWith(queryParams.master || '') &&
          node.area.startsWith(queryParams.area || '') &&
          node.linkTo.startsWith(queryParams.linkTo || '') &&
          node.vendor.startsWith(queryParams.vendor || ''),
      );
  });

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
