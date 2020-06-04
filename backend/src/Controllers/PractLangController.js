const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const practlang = await connection('PRATICA_LINGUAGEM').select('*');
    
        return response.json(practlang);
    },

    async create(request, response) {

        const { DESCRICAO } = request.body;
    
        await connection('PRATICA_LINGUAGEM').insert ({
            DESCRICAO
        })
        return response.json({ DESCRICAO });
    }
}