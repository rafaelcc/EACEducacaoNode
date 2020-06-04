const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const perfil = await connection('PLANO_AULA').select('*');
    
        return response.json(perfil);
    },

    async create(request, response) {

        const { COMPONENTE, ANO_ESCOLAR, TITULO, SOBRE, LINK_EXEMPLO } = request.body;
    
        await connection('PLANO_AULA').insert ({
            COMPONENTE, ANO_ESCOLAR, TITULO, SOBRE, LINK_EXEMPLO
        })
        return response.json({ TITULO });
    }
}