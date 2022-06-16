const parse = require("pg-connection-string").parse;
const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

module.exports = ({ env }) => ({
   connection: { client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
      debug: false,
  },
});
//just some random comments to push a new commit. 