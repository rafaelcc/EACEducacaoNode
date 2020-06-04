
exports.up = function(knex) {

    return knex.schema.createTable('ESCOLA', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.string('NOME').notNullable();
        table.string('CNPJ').notNullable();
        table.string('EMAIL').notNullable();
        table.string('CONTATO').notNullable();
        table.string('LOGRADOURO').notNullable();
        table.integer('NUMERO').notNullable();
        table.string('BAIRRO').notNullable();
        table.string('CEP').notNullable();
        table.string('CIDADE').notNullable();
        table.string('ATIVO').notNullable();
        table.date('DATA_CADASTRO').notNullable();
        table.date('DATA_INICIO').notNullable();
        table.date('DATA_FIM').notNullable();
        table.integer('QTD_USUARIO').notNullable();
        table.foreign('CIDADE').references('ID').inTable('CIDADE');
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('ESCOLA');  
};
