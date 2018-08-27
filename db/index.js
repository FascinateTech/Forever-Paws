import Knex from 'knex';

import knexPostgis from 'knex-postgis';
import bookshelf from 'bookshelf';

const knex = Knex({
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    // user: 'root',
    // password: 'root',
    database: process.env.NODE_ENV === 'test' ? 'thesisTest' : 'thesis',
  },
  useNullAsDefault: true,
});

const st = knexPostgis(knex);

const db = bookshelf(knex);
// Plugin for solving circular reference
db.plugin('registry');

export default db;
