const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const themunit = await connection('UNIDADE_TEMATICA').select('*');
    
        return response.json(themunit);
    },

    async create(request, response) {

        const { DESCRICAO } = request.body;
    
        await connection('UNIDADE_TEMATICA').insert ({
            DESCRICAO
        })
        return response.json({ DESCRICAO });
    }
}