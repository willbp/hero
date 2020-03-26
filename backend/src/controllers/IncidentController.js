//importar conexão do db
const connection = require('../database/connection');

//exportar objeto
module.exports={
    //criar um incidente
    async create(request,response){
        const{title, description, value} = request.body; //corpo da requisição
        //request.headers; //guarda informações do contexto/autenticação/localização do usuário
        const ong_id=request.headers.authorization;//->acessa o id da ong

        const [id] = await connection('incidents').insert({ //primeiro valor vai ficar armazenado na const id
            title,
            description,
            value,
            ong_id
        });
        return response.json({id});
    },

    async index (request, response) {//método index faz a listagem
        //paginação
        const{page = 1} = request.query;//se page != ele vem da página 1
        
        const [count] = await connection('incidents').count();//faz a busca total de registros
        console.log(count);

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//relcionar dados de 2 tabelas
        .limit(5)//limitar os dados na busca para 5 registros
        .offset((page-1)*5) //0*5=0 primeira vez
        .select(['incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);
       
        //testar http://localhost:3333/incidents?page=1 .. 2
        return response.json(incidents);
    },

    async delete (request, response){
        const{id}=request.params;//pegar o id do parametro de rota
        const ong_id=request.headers.authorization; //pegar o id da ong logada
        //o id da ong logada serve para verificar se o incidente q foi solicitado para deletado foi criado pela ong q quer q seja deletado

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

            if(incident.ong_id != ong_id) {
                return response.status(401).json({error: 'Operation not permited.'});

            }

            //caso tenha dado certo
            await connection('incidents').where('id', id).delete();

            return response.status(204).send();
        }
};