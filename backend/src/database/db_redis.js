const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.connect(); 

async function addToRedis(request, response){
    const {email, senha} = request.body;
    try{
        if(email != ''){
            client.SETEX(email, 7200, senha);
            return response.status(200).send('Logado com sucesso!');
        }else{
            response.status(400).send('Falha ao logar');
        }
    }catch(error){
        console.log(error);
    }
}

const getSessao = (request, response)=>{

    const user = request.params.email;
        /*client.get(user,(err,res) => {
            if(res != null){
                const rascunho = JSON.parse(res.toString());

                response.status(200).send(rascunho);
            }
            else{
                response.send(err);
            }
        });*/
        client.get(user).then(function (result) {
            if(result != null){
                response.status(200).json(JSON.parse(result.toString()));
            }
            else{
                response.status(200).send('null')
            }
        });
}

module.exports = {addToRedis, getSessao};
