import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';

import logo from '../../assets/eac_logo_cinza.png'

import './styles.css';

export default function Header() {
    const history = useHistory();
    const userName = localStorage.getItem('Nome')

    if(!userName){
        alert('É necessário logar.')
        history.push('/');
    }
    
    return ( 
        <div className="header-container">
            <header>
                <img src={logo} alt="EAC Educacao" />
                <span> Bem vindo, {userName} </span>
                <Link className="button" to= "/lessonplan"> Gerar Plano de Aula </Link>
                <Link className="button" to= "/lesson"> Gerar Plano de Ensino </Link>
                <Link className="button" to= "/lessoncurr"> Gerar Plano Curricular </Link>
                 
                <button type="button">
                    <FiPower size={18} color="#A9A9A9" />
                </button>
            </header>
        </div>
    );
}