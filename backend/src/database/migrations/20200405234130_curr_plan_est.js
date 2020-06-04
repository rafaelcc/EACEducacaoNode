
exports.up = function(knex) {

    return knex.schema.createTable('PLAN_CURR_EST', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.integer('ESTADO').notNullable();
        table.integer('COD_BNCC').notNullable();
        table.integer('COD_BNCC_EST').notNullable();
        table.integer('COMPONENTE').notNullable();
        table.integer('ANO_ESCOLAR').notNullable();
        table.integer('BIMESTRE').notNullable();
        table.integer('EIXO').notNullable();
        table.integer('CAMPO_ATUACAO').notNullable();
        table.integer('PRATICA_LINGUAGEM').notNullable();
        table.integer('UNIDADE_TEMATICA').notNullable();
        table.string('OBJETO_CONHECIMENTO').notNullable();
        table.string('HABILIDADE_BNCC_EST').notNullable();
        
        table.foreign('ESTADO').references('ID').inTable('ESTADO');
        table.foreign('COD_BNCC').references('ID').inTable('PLAN_CURR_NAC');
        table.foreign('COMPONENTE').references('ID').inTable('COMPONENTE');
        table.foreign('ANO_ESCOLAR').references('ID').inTable('ANO_ESCOLAR');
        table.foreign('BIMESTRE').references('ID').inTable('BIMESTRE');
        table.foreign('EIXO').references('ID').inTable('EIXO');
        table.foreign('CAMPO_ATUACAO').references('ID').inTable('CAMPO_ATUACAO');
        table.foreign('PRATICA_LINGUAGEM').references('ID').inTable('PRATICA_LINGUAGEM');
        table.foreign('UNIDADE_TEMATICA').references('ID').inTable('UNIDADE_TEMATICA');
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('PLAN_CURR_EST');  
};
