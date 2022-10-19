/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://luxzaqmk:yMw2hJfa0S4A30Rr7FJS5zYp1I3n4io-@jelani.db.elephantsql.com/luxzaqmk",
  DATABASE_URL_DEVELOPMENT = "postgres://luxzaqmk:yMw2hJfa0S4A30Rr7FJS5zYp1I3n4io-@jelani.db.elephantsql.com/luxzaqmk",
  DATABASE_URL_TEST = "postgres://luxzaqmk:yMw2hJfa0S4A30Rr7FJS5zYp1I3n4io-@jelani.db.elephantsql.com/luxzaqmk",
  DATABASE_URL_PREVIEW = "postgres://luxzaqmk:yMw2hJfa0S4A30Rr7FJS5zYp1I3n4io-@jelani.db.elephantsql.com/luxzaqmk",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
