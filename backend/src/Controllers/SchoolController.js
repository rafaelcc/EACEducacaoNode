const connection = require('../database/connection');

module.exports =  {

    async index (request, response) {
        const schools = await connection('ESCOLA').select('*');
    
        return response.json(schools);
    },
    
    async create(request, response) {

        const {NOME, CNPJ, EMAIL, CONTATO, LOGRADOURO, NUMERO,
            BAIRRO, CEP, CIDADE, ATIVO, DATA_CADASTRO,
            DATA_INICIO, DATA_FIM, QTD_USUARIO} = request.body;
    
        await connection('ESCOLA').insert ({
            NOME, CNPJ, EMAIL, CONTATO, LOGRADOURO, NUMERO, BAIRRO,
            CEP, CIDADE, ATIVO, DATA_CADASTRO, DATA_INICIO,
            DATA_FIM, QTD_USUARIO
        })
    
        return response.json({ CNPJ });
    },

    async update (request, response) {
        const { id_escola } = request.params;
        const user_id = request.headers.authorization;
        const { ATIVO } = request.body;
        
        const profile  = await connection('USUARIO')
        .join ('PERFIL', 'USUARIO.perfil', '=', 'PERFIL.id')
        .where('USUARIO.id', user_id)
        .where('PERFIL.TIPO', 'A')
        .select('PERFIL.TIPO')
        .first();

        console.log(profile.TIPO);

        console.log(id_escola);

        if (profile.TIPO == 'A') {
            await connection('ESCOLA')
            .where('id', id_escola)
            .update('ATIVO', ATIVO);
            /* await connection('ESCOLA').where('id', id_escola).delete(); */
            return response.status(204).send();
        }    
        return response.status(401).json({error: 'Operation not permitted.'});
    }        
}