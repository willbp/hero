const generateUniqueId = require('../../src/utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {//lista ong da tabela ongs
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        //conectar a tabela ongs
        await connection('ongs').insert({//cria nova ong
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        //retorna o id gerado para ong.
        return response.json({ id });
    }
};

 //