const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const school_year = await connection('ANO_ESCOLAR').select('*');
    
        return response.json(school_year);
    },

    async create(request, response) {

        const { ANO, CLASSIFICACAO } = request.body;
    
        await connection('ANO_ESCOLAR').insert ({
            ANO, 
            CLASSIFICACAO
        })
        return response.json({ CLASSIFICACAO });
    }
}