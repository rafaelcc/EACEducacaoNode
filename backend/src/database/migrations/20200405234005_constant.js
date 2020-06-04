
exports.up = function(knex) {

    return knex.schema.createTable('CONSTANTE', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('DESCRICAO').notNullable();
        table.string('TIPO').notNullable();
        table.string('VALOR').notNullable();
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('CONSTANTE');  
};
