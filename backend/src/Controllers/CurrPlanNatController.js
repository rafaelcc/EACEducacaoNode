const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const plancurrnac = await connection('PLAN_CURR_NAC').select('*');
    
        return response.json(plancurrnac);
    },

    async create(request, response) {

        const { ESTADO, COD_BNCC, COD_BNCC_EST, COMPONENTE, ANO_ESCOLAR, BIMESTRE,
            EIXO, CAMPO_ATUACAO, PRATICA_LINGUAGEM, UNIDADE_TEMATICA, OBJETO_CONHECIMENTO,
            HABILIDADE_BNCC_EST } = request.body;
    
        await connection('PLAN_CURR_NAC').insert ({
            COD_BNCC, COMPONENTE, ANO_ESCOLAR, BIMESTRE,
            EIXO, CAMPO_ATUACAO, PRATICA_LINGUAGEM, UNIDADE_TEMATICA, HABILIDADE_BNCC,
            COMENTARIO_BNCC

        })
        return response.json({ COD_BNCC });
    }
}