import Mirage from 'ember-cli-mirage';

const accessToken = '1234567890';

export default function() {
  this.namespace = '';
  this.timing = 0;

  this.get('/networks/node-items', (schema, { queryParams }) => {
    console.log(schema);
    return schema.nodeItems
      .all()
      .filter(
        (nodeItem) =>
          nodeItem.name.startsWith(queryParams.name || '') &&
          nodeItem.master.startsWith(queryParams.master || '') &&
          nodeItem.area.startsWith(queryParams.area || '') &&
          nodeItem.linkTo.startsWith(queryParams.linkTo || '') &&
          nodeItem.vendor.toLowerCase().startsWith(queryParams.vendor || '') &&
          nodeItem.country.toLowerCase().startsWith(queryParams.country || ''),
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
