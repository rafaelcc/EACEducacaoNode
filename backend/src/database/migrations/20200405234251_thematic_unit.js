
exports.up = function(knex) {

    return knex.schema.createTable('UNIDADE_TEMATICA', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('DESCRICAO').notNullable(); 
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('UNIDADE_TEMATICA');  
};
