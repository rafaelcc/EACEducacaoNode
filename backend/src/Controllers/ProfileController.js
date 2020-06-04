const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const perfil = await connection('PERFIL').select('*');
    
        return response.json(perfil);
    },

    async create(request, response) {

        const { TIPO, DESCRICAO } = request.body;
    
        await connection('PERFIL').insert ({
            TIPO, 
            DESCRICAO
        })
        return response.json({ DESCRICAO });
    }
}