const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const perfomance_field = await connection('CAMPO_ATUACAO').select('*');
    
        return response.json(perfomance_field);
    },

    async create(request, response) {

        const { DESCRICAO } = request.body;
    
        await connection('CAMPO_ATUACAO').insert ({
            DESCRICAO
        })
        return response.json({ DESCRICAO });
    }
}