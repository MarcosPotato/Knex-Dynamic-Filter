const { v4 } = require('uuid')

exports.seed = function(knex, Promise) {
    knex.schema.insert({
        idProfile: v4(),
        name: 'Marcos Moreira',
        age: 20,
        country: 'Brazil',
        address: 'Fake Address',
        state: 'São Paulo',
        city: 'Salto',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Potato',
        age: 20,
        country: 'England',
        address: 'Fake Address',
        state: 'London',
        city: 'London',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Carrot',
        age: 20,
        country: 'Brazil',
        address: 'Fake Address',
        state: 'São Paulo',
        city: 'São Paulo',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Duck',
        age: 18,
        country: 'Brazil',
        address: 'Fake Address 2',
        state: 'São Paulo',
        city: 'Salto',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Duck1',
        age: 15,
        country: 'Brazil',
        address: 'Fake Address 2',
        state: 'São Paulo',
        city: 'Salto',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Kamala',
        age: 22,
        country: 'England',
        address: 'Fake Address 3',
        state: 'London',
        city: 'London',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Marcos',
        age: 22,
        country: 'Brazil',
        address: 'Fake Address 3',
        state: 'London',
        city: 'London',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Jerry',
        age: 55,
        country: 'Brazil',
        address: 'Fake Address 2',
        state: 'São Paulo',
        city: 'Itu',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

    knex.schema.insert({
        idProfile: v4(),
        name: 'Duck Donald',
        age: 45,
        country: 'Brazil',
        address: 'Fake Address 2',
        state: 'São Paulo',
        city: 'Itu',
        email: 'fakeemail@fake.com.br'
    }).table('profiles')

}

exports.down = function(knex) {
    knex.schema.table('profile').del()
};
