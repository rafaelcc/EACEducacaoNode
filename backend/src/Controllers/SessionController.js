const connection = require('../database/connection');

module.exports =  {
    async create(request, response) {
        const { CNPJ_CPF } = request.body;
        
        const users = await connection('USUARIO')
        .where('CNPJ_CPF','=', CNPJ_CPF)
        .select('NOME')
        .first();

        if (!users) {
            return response.status(400).json({ error: 'No User found with this CPF_CNPJ' });
        }
        return response.json(users);
    }
}