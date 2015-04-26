// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Production
    production: {
        // must not contain a path suffix after the hostname - "subdirs" are not (yet) supported!
        url: 'http://www.gohabits.org',
        forceAdminSSL: true,
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    }
};
