const Knex = require('knex')
const Config = require('../../knexfile.js')

const connection = Knex(Config.development)

module.exports = connection