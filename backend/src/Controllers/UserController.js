const connection = require('../database/connection');

module.exports =  {
        
    async index (request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('USUARIO').count();

        const users = await connection('USUARIO')
        .join ('CIDADE', 'USUARIO.CIDADE', '=', 'CIDADE.id')
        .join ('ESTADO', 'CIDADE.ESTADO', '=', 'ESTADO.id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['USUARIO.*', 'CIDADE.DESCRICAO', 'ESTADO.UF']);
    
        response.header('X-Total-Count', count['count(*)']);

        return response.json(users);
    },

    async create(request, response) {

        const {PERFIL, NOME, CNPJ_CPF, TELEFONE, EMAIL, LOGRADOURO, NUMERO, 
            BAIRRO, CEP, CIDADE_DESC, ESCOLA, ATIVO, DATA_CADASTRO, DATA_INICIO, 
            DATA_FIM, SENHA} = request.body;
        
        const CIDADE = (await connection('CIDADE')
                .where ('DESCRICAO', '=', CIDADE_DESC)
                .select('CIDADE.id')
                .first()).id;

        await connection('USUARIO').insert ({
            PERFIL,
            NOME,
            CNPJ_CPF,
            TELEFONE,
            EMAIL,
            LOGRADOURO,
            NUMERO,
            BAIRRO,
            CEP,
            CIDADE,
            ESCOLA,
            ATIVO,
            DATA_CADASTRO,
            DATA_INICIO,
            DATA_FIM,
            SENHA
        })
        return response.json({ CNPJ_CPF });
    }
}



    /* async index_single (request, response) {
        const { id } = request.params;

        const users = await connection('USUARIO')
        .where('id','=', id)
        .select('*');
    
        return response.json(users);
    }, */