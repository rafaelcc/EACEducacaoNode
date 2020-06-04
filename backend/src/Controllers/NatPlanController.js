const connection = require('../database/connection');

module.exports =  {
    
    async index (request, response) {
        const bncc_est = await connection('PLAN_CURR_NAC').select('*');
    
        return response.json(bncc_est);
    },

    async create(request, response) {

        const { ID, COD_BNCC, COMPONENTE, ANO_ESCOLAR, BIMESTRE, EIXO,
            CAMPO_ATUACAO, PRATICA_LINGUAGEM, UNIDADE_TEMATICA, HABILIDADE_BNCC,
            COMENTARIO_BNCC} = request.body;
    
        await connection('PLAN_CURR_NAC').insert ({
            COD_BNCC,
            COMPONENTE,
            ANO_ESCOLAR,
            BIMESTRE,
            EIXO,
            CAMPO_ATUACAO,
            PRATICA_LINGUAGEM,
            UNIDADE_TEMATICA,
            HABILIDADE_BNCC,
            COMENTARIO_BNCC
        })
        return response.json({ COD_BNCC });
    }
}