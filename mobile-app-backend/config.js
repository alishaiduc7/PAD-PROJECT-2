const config = require("./package.json").projectConfig;

module.exports = {
  mongoConfig: {
    connectionUrl: "mongodb://localhost:27017",
    database: "delivery_db",
    collections: {
      USERS: "users",
    },
  },
  serverConfig: {
    ip: config.serverIp,
    port: config.serverPort,
  },
  tokenSecret: "delivery_secret",
};
