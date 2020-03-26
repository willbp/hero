import React, { useState } from 'react'; //cria componente
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; //pode usar o FiLogIn como componente

import api from '../../services/api'

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {//exporta função
    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        //precisa do id para enviar (validar se a ONG existe)
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });//ver insomnia (Login)
            //envia o objeto contendo id da ong que ta querendo logar na app
            console.log(response.data.name);
            
            //o nome e o id eu preciso ter isso disponivel em toda aplicaçãoentão salvo no storage do navegador
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('./profile');
            //agora os dados de ongname e ongid estão dentro de F12 aplication, localhost:3000, (depois de logar com seu id)
            
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">

            <section className="form">

                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"
                        valye={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}