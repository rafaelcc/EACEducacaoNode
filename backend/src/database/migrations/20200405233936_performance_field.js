
exports.up = function(knex) {

    return knex.schema.createTable('CAMPO_ATUACAO', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('DESCRICAO').notNullable();      
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('CAMPO_ATUACAO');  
};
