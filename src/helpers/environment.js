let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000';
        break;
    case 'gkm-talequest-client.herokuapp.com':
        APIURL = 'https://gkm-talequest-server.herokuapp.com';
        break;
    default:
}

export default APIURL;