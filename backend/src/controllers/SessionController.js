//importar conexão do db
const connection = require('../database/connection');

//exportar objeto
module.exports={
    //criar um incidente
    async create(request,response){
        const{id} = request.body;
        
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

            if(!ong){
                return response.status(400).json({error: 'No ONG found with this ID'});
            }

            return response.json(ong);
    }
}