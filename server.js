import mongoose from 'mongoose';
import app from './index';
import config from './api/config/config';

const debug = require('debug')('app:startup');
const dbDebug = require('debug')('app:db');

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(config.test_db, {
    useNewUrlParser: true,
  });
  app.listen(config.test_port, (err) => {
    if (err) throw err;
    debug(`App listening on port ${config.test_port}`);
  });
} else {
  mongoose.connect(config.db, {
    useNewUrlParser: true,
  });
  app.listen(config.port, (err) => {
    if (err) throw err;
    debug(`App listening on port ${config.port}`);
  });
}
mongoose.connection.on('connected', () => {
  dbDebug(`mongoose default connection open to ${config.db}`);
});

module.exports = app;
