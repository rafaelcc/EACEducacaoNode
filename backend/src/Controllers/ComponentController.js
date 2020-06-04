const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const component = await connection('COMPONENTE').select('*');
    
        return response.json(component);
    },

    async create(request, response) {

        const { DESCRICAO } = request.body;
    
        await connection('COMPONENTE').insert ({
            DESCRICAO
        })
        return response.json({ DESCRICAO });
    }
}