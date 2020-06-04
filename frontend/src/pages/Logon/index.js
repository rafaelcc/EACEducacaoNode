import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/eac_logo_cinza.png';

export default function Logon(){ 
    const [numCpf, setnumCpf] = useState('');
    const history = useHistory();

    async function handleLogin(e){

        e.preventDefault();

        const CNPJ_CPF = numCpf;

        try {
            const response = await api.post('sessions', { CNPJ_CPF });

            localStorage.setItem('cpf', CNPJ_CPF);
            localStorage.setItem('Nome', response.data.NOME);
            
            history.push('/home');
        } catch (err) {
            alert('Falha ao logar.')
            setnumCpf('');
        }
    }

    return (
        <div className="logon-container">
            <section className="class form">
            <form onSubmit={handleLogin}>
                <h1>Faça Seu Logon</h1>

                <input 
                    placeholder="Seu CPF" 
                    value={numCpf}
                    onChange={e => setnumCpf(e.target.value)}
                />
               {/*  <input placeholder="Senha" /> */}
                <button className="button" type="submit"> Entrar </button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#A9A9A9" />
                    Não tenho cadastro
                </Link>
            </form>            
            </section>
            <img src={logo} alt="EAC" />
        </div>
    );
}