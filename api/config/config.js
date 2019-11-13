const config = {
  port: process.env.PORT || 3000,
  db: process.env.MONGOLAB_URI || 'mongodb://localhost/authen',
  test_port: 4000,
  test_db: 'mongodb://localhost/authenTest',
};

module.exports = config;
