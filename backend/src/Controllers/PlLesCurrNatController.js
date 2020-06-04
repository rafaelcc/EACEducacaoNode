const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const axis = await connection('P_AULA_PCURRNAC').select('*');
    
        return response.json(axis);
    },

    async create(request, response) {

        const { ID_PA, ID_PCN } = request.body;
    
        await connection('P_AULA_PCURRNAC').insert ({
            ID_PA, ID_PCN
        })
        return response.json({ ID_PA, ID_PCN });
    }
}