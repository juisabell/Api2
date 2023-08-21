// importar o express (pacote --> servidor) para a aplicação
const express = require('express');

// instanciar (todas as funções disponiveis) o express na variavel app
const app = express();

// definir a porta do servidor (comunicação de dados = entrada e saida)
const PORT = 3006;

// testar uma rota get
app.get('/segundaApi', (request, response) => {
    response.send('Testa a rota no express');
})

// testar o servidor
app.listen(PORT,() => console.log(`Running at port ${PORT}`));
