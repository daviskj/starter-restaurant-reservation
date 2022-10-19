/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://rpzwcxnb:XqecKODu0yz57jLhKp6_UxBhkit2lruH@jelani.db.elephantsql.com/rpzwcxnb",
  DATABASE_URL_DEVELOPMENT = "postgres://rpzwcxnb:XqecKODu0yz57jLhKp6_UxBhkit2lruH@jelani.db.elephantsql.com/rpzwcxnb",
  DATABASE_URL_TEST = "postgres://rpzwcxnb:XqecKODu0yz57jLhKp6_UxBhkit2lruH@jelani.db.elephantsql.com/rpzwcxnb",
  DATABASE_URL_PREVIEW = "postgres://rpzwcxnb:XqecKODu0yz57jLhKp6_UxBhkit2lruH@jelani.db.elephantsql.com/rpzwcxnb",
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
