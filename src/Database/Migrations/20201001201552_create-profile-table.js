exports.up = function(knex) {
    knex.schema.createTable('profiles', table => {
        table.string('idProfile').primary().notNullable()
        table.string('name').notNullable()
        table.integer('age').notNullable()
        table.string('country').notNullable()
        table.string('address').notNullable()
        table.string('state').notNullable()
        table.string('city').notNullable()
        table.string('email').notNullable()
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExist('profiles')
};
