const knex = require ('knex'); //importando knex
const configuration = require ('../../knexfile'); //importando knex

const connection =knex(configuration.development);//criando conexão para DESENVOLVEDOR

//EXPORTAR  DAQUI DE DENTRO O ARQUIVO DE CONEXÃO COM BANCO DE DADOS
module.exports = connection;
//agora posso importar ele pra onde for necessário ex: routes.js
