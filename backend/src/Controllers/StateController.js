const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const state = await connection('ESTADO').select('*');
    
        return response.json(state);
    },

    async create(request, response) {

        const { ESTADO, DESCRICAO, UF } = request.body;
    
        await connection('ESTADO').insert ({
            ESTADO, 
            DESCRICAO, 
            UF
        })
        return response.json({ ESTADO });
    }
}