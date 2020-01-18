import Mirage from 'ember-cli-mirage';

const accessToken = '1234567890';

export default function() {
  this.namespace = 'api';
  this.timing = 0;

  this.get('/networks/nodes');

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
      roles: ['ROLE_USER']
    };
  });
}
