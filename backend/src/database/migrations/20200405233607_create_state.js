
exports.up = function(knex) {

    return knex.schema.createTable('ESTADO', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('ESTADO').notNullable();
        table.string('DESCRICAO').notNullable();
        table.string('UF').notNullable();
        
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('ESTADO');  
};
