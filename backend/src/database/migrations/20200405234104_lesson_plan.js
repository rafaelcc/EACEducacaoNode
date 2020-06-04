
exports.up = function(knex) {

    return knex.schema.createTable('PLANO_AULA', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.integer('COMPONENTE').notNullable();
        table.integer('ANO_ESCOLAR').notNullable();
        table.string('TITULO').notNullable();
        table.string('SOBRE').notNullable();
        table.string('LINK_EXEMPLO').notNullable();
        
        table.foreign('COMPONENTE').references('ID').inTable('COMPONENTE');
        table.foreign('ANO_ESCOLAR').references('ID').inTable('ANO_ESCOLAR');
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('PLANO_AULA');  
};
