
exports.up = function(knex) {

    return knex.schema.createTable('COMPONENTE', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('DESCRICAO').notNullable();
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('COMPONENTE');  
};
