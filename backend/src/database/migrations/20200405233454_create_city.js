
exports.up = function(knex) {

    return knex.schema.createTable('CIDADE', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('DESCRICAO').notNullable();
        table.integer('ESTADO').notNullable();
        
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('CIDADE');  
};
