
exports.up = function(knex) {

    return knex.schema.createTable('P_AULA_PCURRNAC', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.integer('ID_PA').notNullable();
        table.integer('ID_PCN').notNullable();

        table.foreign('ID_PA').references('ID').inTable('PLANO_AULA');
        table.foreign('ID_PCN').references('ID').inTable('PLAN_CURR_NAC');
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('P_AULA_PCURRNAC');  
};
