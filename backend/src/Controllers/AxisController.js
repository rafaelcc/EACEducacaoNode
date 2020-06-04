const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const axis = await connection('EIXO').select('*');
    
        return response.json(axis);
    },

    async create(request, response) {

        const { DESCRICAO } = request.body;
    
        await connection('EIXO').insert ({
            DESCRICAO
        })
        return response.json({ DESCRICAO });
    }
}