import React, { useEffect, useState, useRef } from 'react';
import Header from '../Header';
import './styles.css';
import api from '../../services/api';
import ReactToPrint from 'react-to-print';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
/* import FormHelperText from '@material-ui/core/FormHelperText'; */
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import logo from '../../assets/eac_logo_min.png'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LessonPlan () {
    const classes = useStyles();


    const componentRef = useRef(); // imprimir

    const [componentType, setcomponentType] = useState('');
    const [BNCCCode, setBNCCCode] = useState('');
    const [listComp, setListComp] = useState([]);

    useEffect(()=> {
        api.get('component')
        .then( response => { setListComp(response.data); } )
    }, [listComp]);

    return (
        <div>
          <Header> </Header>
          <div className="lessonplan-container">
              <h1>Plano de Aula</h1>
                <div className="lessonplan-selection">
                    <div className="lessonplan-selection-form">
                    <FormControl variant="outlined" className={classes.formControl} >
                    <InputLabel id="demo-simple-select-outlined-label">Componente</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={componentType}
                        onChange={e => setcomponentType(e.target.value)}
                        label="Component"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                            {listComp.map(data =>   <MenuItem key ={data.id}
                                                        value={data.id}>
                                                        {data.DESCRICAO}
                                                    </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    </div>
                    <input className="lessonplan-input"
                            placeholder="Código BNCC" 
                            value={BNCCCode}
                            onChange={e => setBNCCCode(e.target.value)}
                        />
                    <button className="rbutton" type="submit" > 
                        Gerar Roteiro </button>
                    <button className="rbutton" type="submit" > 
                        Sugestão de Aula</button>
                </div> 
                <div className="lessonplan-table">
                    <div className="lessonplan-table-cabecalho">
                        <img src={logo} alt="EAC Educacao" />
                        <h2 className="lessonplan-table-cabecalho-h1">Plano de Aula - EAC Educação</h2> 
                    </div>
                    <table className="lessonplan-table-border">
                        <tbody>
                        <tr>
                            <td ><strong>Escola:</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Professor(a):</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Pedagogo(a):</strong></td>
                        </tr>
                        <tr>
                            <td style={{width: 300}}><strong>Turma:</strong></td>
                            <td style={{width: 200}}><strong>Turno:</strong></td>
                            <td style={{width: 200}}><strong>Data:</strong></td>
                        </tr>
                        <h2></h2>
                        </tbody>
                    </table>
                    <table className="lessonplan-table-border">
                        <tbody>
                        <tr>
                            <td style={{width: 230}}><strong>Componente</strong></td>
                            <td style={{width: 470}}><strong>Língua Portuguesa</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Ano/Etapa</strong></td>
                            <td><strong>1º Ano</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Campo de atuação</strong></td>
                            <td><strong>TODOS OS CAMPOS DE ATUAÇÃO</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Práticas de Linguagem</strong></td>
                            <td><strong>Análise linguística/semiótica (Alfabetização)</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Objetos de conhecimento</strong></td>
                            <td><strong>Construção do sistema alfabético</strong></td>
                        </tr>
                        <h2></h2>
                        </tbody>
                    </table>
                    <h2 className="lessonplan-table-h2">Habilidade</h2>
                    <table className="lessonplan-table-border">
                    <tbody>
                        <tr>
                            <td style={{width: 200}}><strong>EF01LP05X</strong></td>
                            <td style={{width: 500}}><strong>Reconhecer o sistema de escrita alfabética como representação dos sons da fala, bem como a diversidade de pontos articulatórios para a execução de cada som.</strong></td>
                        </tr>
                        <h2></h2>
                    </tbody>
                    </table>
                    <table className="lessonplan-table-border">
                    <h2 className="lessonplan-table-h3">Comentário PRO BNCC</h2>
                    <tbody>
                        <tr>
                            <td ><strong>A associação de uma marca gráfica (seja letra ou não) a cada emissão sonora de uma palavra (sílaba oral) já representa indícios do processo de fonetização que, neste momento, não compreende a reanálise da sílaba em unidades menores nem, portanto, o estabelecimento de relação entre fonema-letra/grafema. Aos poucos, por meio da reflexão reiterada sobre a escrita, será possível que isso aconteça, chegando-se ao uso das letras convencionais.</strong></td>
                        </tr>
                        <h2></h2>
                    </tbody>
                    </table>
                    <table className="lessonplan-table-border">
                        <h2 className="lessonplan-table-h4">Plano de Aula</h2>
                        <tbody>
                            <tr>
                                <td style={{width: 700}}><strong>Duração Total da Aula:</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Objetivo da aula:</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Como serão coletadas evidências do aprendizado dos alunos?</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Quais seriam evidências do aprendizado dos alunos?</strong></td>
                            </tr>
                            <h2></h2>
                        </tbody>
                    </table>
                </div>
                <div className="lessonplan-print">
                    <ReactToPrint
                        trigger={() => <button className="rbutton">Imprima seu formulário</button>}
                        content={() => componentRef.current}
                    />
                    <lessonplan-table ref={componentRef} /> 
                </div>
            </div>
        </div>
)
}