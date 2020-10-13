// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/Database/MyDB.sqlite'
    },
    migrations: {
      directory: "./src/Database/Migrations",
    },
    useNullAsDefault: true
  }
};
