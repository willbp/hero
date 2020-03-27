const express = require('express'); //importando o módulo chamado express para a constante chamada express.
const cors = require('cors');//importar cors
const {errors} = require('celebrate');
const routes = require('./routes'); //./ pois é arquivo e não um pacote para voltar é ../     o ./ referencia o mesmo local do arquivo

const app = express(); //variável q vai armazenar a aplicação. Instanciar (criando a aplicação q vai ter as rotas, funcionalidades, etc).

app.use(cors());//em caso de produção opção origin: ({'http//meuapp.com')}};

//informar para o express que estaremos utilizando JSon para as requisições
app.use(express.json()); // deve vir antes das rotas

app.use(routes);

app.use(errors());

module.exports=app;
/**
 * 
 * Método HTTP
 * 
 * -buscando GET: buscar/listar informação do backend (puxar dados do backend)
 * -cadastrando POST: criar informação no backend -enviar dados usuário
 * -alterando PUT: alterar uma informação no backend
 * -deletando DELETE: deletar informação no backend
 * 
 */

/**
 * Tipos de Parâmetros que posso enviar para uma rota:
 * 
 * Query: parâmetros enviados/nomeados pela URL/rota após a ? serve para filtros e paginação /users?name=William
 * Route: parâmetros utilizados para identificar recursos  /users/:id (tudo q vem dps de /users/ será nomeado como id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 **/



/**
app.post('/users', (request, response) =>{ //"eu quero acessar o recurso de usuários /users"
//return response.send('Hello World'); não vamos utilizar resposta em texto vamos trabalhar em JSON então..
    const body = request.body;
    console.log(body);
    //http://localhost:3333/users
    //Insomnia POST (JSON)
**/

/*   Route Params
app.get('/users/:id', (request, response) =>{ //"eu quero acessar o recurso de usuários /users"
//return response.send('Hello World'); não vamos utilizar resposta em texto vamos trabalhar em JSON então..
    const params = request.params;
    console.log(params);
    //http://localhost:3333/users/1
    //Insomnia GET
*/

/*
//**Query Params
//rota raiz do node
app.get('/users', (request, response) =>{ //"eu quero acessar o recurso de usuários /users"
const params = request.query;
console.log(params);
//http://localhost:3333/users?name=MeuPau
//Insomnia GET

//segunda parte das querys
return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'William Bortoluzzi Pereira Lindo'
});
});//segundo parâmetro recebe uma função


//Cannot GET / (a aplicação existe mas não tem nenhuma rota/funcionalidade nenhuma)

*/


//app.listen(3333); //a aplicação vai ouvir a porta 3333 (qdo acessar essa rota ela vai acessar a aplicação)

