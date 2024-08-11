// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "mongo",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 27017),
      database: env("DATABASE_NAME", "strapi"),
      username: env("DATABASE_USERNAME", ""),
      password: env("DATABASE_PASSWORD", ""),
      ssl: env.bool("DATABASE_SSL", false),
    },
    debug: false,
  },
});
