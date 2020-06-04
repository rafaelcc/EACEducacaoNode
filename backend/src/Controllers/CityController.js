const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const city = await connection('CIDADE').select('*');
    
        return response.json(city);
    },

    async create(request, response) {

        const { DESCRICAO, ESTADO } = request.body;
    
        await connection('CIDADE').insert ({
            DESCRICAO,
            ESTADO
        })
        return response.json({ DESCRICAO });
    }
}