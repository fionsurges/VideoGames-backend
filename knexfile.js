// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost:/galvanize_memory_3"
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
