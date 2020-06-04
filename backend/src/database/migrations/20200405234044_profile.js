
exports.up = function(knex) {

    return knex.schema.createTable('PERFIL', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('TIPO').notNullable();
        table.string('DESCRICAO').notNullable();        
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('PERFIL');  
};
