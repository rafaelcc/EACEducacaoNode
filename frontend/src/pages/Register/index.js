import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/eac_logo.png';

import api from '../../services/api';

import alert from 'alert-node';


export default function Register(){
    const [inputNome, setNome] = useState('');
    const [inputCnpj_Cpf, setCnpj_Cpf] = useState('');
    const [inputTelefone, setTelefone] = useState('');
    const [inputEmail, setEmail] = useState('');
    const [inputLogradouro, setLogradouro] = useState('');
    const [inputNumero, setNumero] = useState('');
    const [inputBairro, setBairro] = useState('');
    const [inputCep, setCep] = useState('');
    const [inputCidade, setCidade] = useState('');
    const [inputEstado, setEstado] = useState('');
    const [inputEscola, setEscola] = useState('');
    const [inputSenha, setSenha] = useState('');

    const history = useHistory();

    async function CPFvalidator (inputCnpj_Cpf) {
        const { cpf } = require('cpf-cnpj-validator');

        if ( ! cpf.isValid(inputCnpj_Cpf) ) {
            alert('CPF Inválido');
            return '';
        } else {
        return cpf.format(inputCnpj_Cpf);
        }
    }

    useEffect(() => {
        if (inputCnpj_Cpf?.length === 11)
        CPFvalidator(inputCnpj_Cpf).then(data => setCnpj_Cpf(data)) ;
    }, [CPFvalidator]);
    
    async function CEPValidator(inputCep){   

        const endereco = await require('cep-promise');

        return endereco(inputCep);
    }

    useEffect(() => {
        if (inputCep?.length === 8)
        CEPValidator(inputCep).then(data => {
            setEstado(data.state);
            setCidade(data.city);
            setBairro(data.neighborhood);
            setLogradouro(data.street);
        });
    }, [CEPValidator]);

    async function handleRegister(e){
        e.preventDefault();
        const zeroFill = n => {
            return ('0' + n).slice(-2);
        }
        const now = new Date();
        const PERFIL = 2;
        const NOME = inputNome;
        const CNPJ_CPF = inputCnpj_Cpf.replace(/\D/g, '');
        const TELEFONE = inputTelefone;
        const EMAIL = inputEmail;
        const LOGRADOURO = inputLogradouro;
        const NUMERO = inputNumero.charCodeAt(Number);
        const BAIRRO = inputBairro
        const CEP = inputCep
        const CIDADE_DESC = inputCidade;
        const ESCOLA = inputEscola
        const ATIVO = 1;
        const DATA_CADASTRO = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear()
        const DATA_INICIO = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear()
        const DATA_FIM = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear();
        const SENHA = inputSenha;

        const data = {
            PERFIL,
            NOME,
            CNPJ_CPF,
            TELEFONE,
            EMAIL,
            LOGRADOURO,
            NUMERO,
            BAIRRO,
            CEP,
            CIDADE_DESC,
            ESCOLA,
            ATIVO,
            DATA_CADASTRO,
            DATA_INICIO,
            DATA_FIM,
            SENHA
        };

        try{
            const response = await api.post('users', data);

            alert('Seu Cadastro foi realizado com sucesso!');

            history.push('/');
        } catch {
            alert('Erro');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e comece a revolucionar a sua forma de ensino.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#A9A9A9" />
                        Voltar para tela de logon.
                    </Link>
                    <img src={logo} alt="EAC" />
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value={inputNome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <div  className="input-group"> 
                        <input placeholder="CPF"
                        maxLength={11}
                        value={inputCnpj_Cpf}
                        onChange={e => setCnpj_Cpf(e.target.value)}
                        />
                        <input placeholder="Telefone"
                        value={inputTelefone}
                        onChange={e => setTelefone(e.target.value)}
                        />
                    </div>
                    <input type="email" placeholder="E-mail"
                        value={inputEmail}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input placeholder="CEP"  style={{width: 200}}
                        maxLength={8}
                        value={inputCep}
                        onChange={(e) => setCep(e.target.value)}                        
                    />
                    <div  className="input-group"> 
                        <input placeholder="Rua"
                            value={inputLogradouro}
                            onChange={e => setLogradouro(e.target.value)}
                        />
                        <input placeholder="N°" style={{width: 80}}
                            value={inputNumero}
                            onChange={e => setNumero(e.target.value)}
                        />
                    </div>
                    <input placeholder="Bairro"
                        value={inputBairro}
                        onChange={e => setBairro(e.target.value)}
                    />
                    <div  className="input-group">
                        <input placeholder="Cidade"
                            value={inputCidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                        <input placeholder="UF" style={{width: 80}}
                            value={inputEstado}
                            onChange={e => setEstado(e.target.value)}
                        />
                    </div>
                    <input placeholder="Escola"
                        value={inputEscola}
                        onChange={e => setEscola(e.target.value)}
                    />
                    <input placeholder="Senha"
                        value={inputSenha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button" type="submit" > 
                    Cadastrar </button>
                </form>
            </div>
        </div>
    )
}