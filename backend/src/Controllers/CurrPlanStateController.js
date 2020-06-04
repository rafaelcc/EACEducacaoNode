const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const plancurrstate = await connection('PLAN_CURR_EST').select('*');
    
        return response.json(plancurrstate);
    },

    async create(request, response) {

        const { ESTADO, COD_BNCC, COD_BNCC_EST, COMPONENTE, ANO_ESCOLAR, BIMESTRE,
            EIXO, CAMPO_ATUACAO, PRATICA_LINGUAGEM, UNIDADE_TEMATICA, OBJETO_CONHECIMENTO,
            HABILIDADE_BNCC_EST } = request.body;
    
        await connection('PLAN_CURR_EST').insert ({
            ESTADO, COD_BNCC, COD_BNCC_EST, COMPONENTE, ANO_ESCOLAR, BIMESTRE,
            EIXO, CAMPO_ATUACAO, PRATICA_LINGUAGEM, UNIDADE_TEMATICA, OBJETO_CONHECIMENTO,
            HABILIDADE_BNCC_EST
        })
        return response.json({ HABILIDADE_BNCC_EST });
    }
}