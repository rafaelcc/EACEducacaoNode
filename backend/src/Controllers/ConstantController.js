const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const constant = await connection('CONSTANTE').select('*');
    
        return response.json(constant);
    },

    async create(request, response) {

        const { DESCRICAO, TIPO, VALOR } = request.body;
    
        await connection('CONSTANTE').insert ({
            DESCRICAO, TIPO, VALOR
        })
        return response.json({ DESCRICAO });
    }
}