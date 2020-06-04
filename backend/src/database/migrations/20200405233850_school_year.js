
exports.up = function(knex) {

    return knex.schema.createTable('ANO_ESCOLAR', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('ANO').notNullable();
        table.string('CLASSIFICACAO').notNullable();       
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('ANO_ESCOLAR');  
};
