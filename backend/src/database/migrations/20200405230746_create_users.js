
exports.up = function(knex) {

    return knex.schema.createTable('USUARIO', function (table) {
        table.increments();
        /* table.string('ID').primary(); */
        table.integer('PERFIL').notNullable();
        table.string('NOME').notNullable();
        table.string('CNPJ_CPF').notNullable();
        table.string('TELEFONE').notNullable();
        table.string('EMAIL').notNullable();
        table.string('LOGRADOURO').notNullable();
        table.integer('NUMERO').notNullable();
        table.string('BAIRRO').notNullable();
        table.string('CEP').notNullable();
        table.integer('CIDADE').notNullable();
        table.string('ESCOLA').notNullable();
        table.integer('ATIVO').notNullable();
        table.date('DATA_CADASTRO').notNullable();
        table.date('DATA_INICIO').notNullable();
        table.date('DATA_FIM').notNullable();
        table.string('SENHA').notNullable();
        
        table.foreign('CIDADE').references('ID').inTable('CIDADE');
        table.foreign('ESCOLA').references('ID').inTable('ESCOLA');
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('USUARIO');  
};
