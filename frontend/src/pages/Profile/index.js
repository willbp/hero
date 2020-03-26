import React, { useState, useEffect } from 'react'; //cria componente
//useEffect dispara alguma função em algum determinado momento do componente
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'; //pode usar o FiLogIn como componente
import logoImg from '../../assets/logo.svg';
import api from '../../services/api'

import './style.css';

export default function Profile() {//exporta função
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');


    //exemplo: qdo é mostrado em tela
    useEffect(() => {
        api.get('profile', {//1-qual função q eu quero q seja executada /2-quando a função vai ser executada
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);//este ongId é uma dependência "toda var dentro do effect, se o id da ong mudar ele recalcula os incidents dela"



    //função para deletar um incidente
    async function handleDeleteIncident(id) {
        try {//precisa do header de autorização (de qual ong está querendo deletar)
            //adicionar no botão e verificar a exclusão por f12 network
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    function handleLogout() {//handle = ação do usuário
        localStorage.clear();
        history.push('/');
    }




    return (//retorna olá mundo
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={20} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>

                {incidents.map(incident => (//key é o valor unico para cada um dos incidentes
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                )) //percorre cada um deles retornando algo; e incidents=>( pra por o JSX)
                }


            </ul>
        </div>

    );
}