const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
//Importando OngController para aqui dentro
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//Foi para o OngController
//const crypto = require('crypto');

//importando conexão
//const connection = require('./database/connection');

const routes = express.Router();



//conteúdo para Listar
//routes.get('/ongs', async (request, response)=>{//rota para listar
//  const ongs = await connection('ongs').select('*');

//return response.json(ongs);

//});




/*
routes.post('/users', (request, response) =>{ //"eu quero acessar o recurso de usuários /users"
//return response.send('Hello World'); não vamos utilizar resposta em texto vamos trabalhar em JSON então..
    const body = request.body;
    
    console.log(body);
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'William B'
    });
});
*/
routes.get('/ongs', OngController.index);//rota de listagem

//"eu quero acessar o recurso de usuários /users"

//whats foi cadastrado como string no bd por isso segue como string aqui
routes.post('/ongs', celebrate({
[Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
}),
}), OngController.create);


routes.get('/profile', celebrate({
[Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
}).unknown(),
}), ProfileController.index);


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}),IncidentController.index);

routes.post('/incidents', IncidentController.create);
routes.post('/sessions', SessionController.create);//criando uma sessão

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}),IncidentController.delete);


/*
routes.post('/ongs', async (request, response) =>{ //"eu quero acessar o recurso de usuários /users"

//return response.send('Hello World'); não vamos utilizar resposta em texto vamos trabalhar em JSON então..
    const {name, email, whatsapp, city, uf} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');
    
    //conectar a tabela ongs
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    
    return response.json(id); //retorna o id gerado para ong.
});
*/
module.exports = routes; //exportar variável de dentro do arquivo

