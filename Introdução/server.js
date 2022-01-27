//Criando servidor HTTP

const http = require('http');
//Cria uma constante HTTP usando o padrão Commonjs

const server = http.createServer((request, response)=>{
    //O método createServer espera uma requisição e devolve uma resposa. Tudo fica armazenado na constante server

    //Criando um separador de urls
    switch(request.url) {
        case '/about':
            response.write('Sobre Nos');
        break;

        case '/users':

            switch(request.method) {
                case 'GET':
                    response.write('Listar Usuários');
                break
                case 'POST':
                    response.write('Cadastrar Usuários');
                break
            }

        break;

        case '/':
            response.write('Ola Mundo! NodeJS');
        break;

        default:
            response.write('Not Found - 404');
    }

    //Recuperando qual a URL sendo chamada
    console.log(`Qual URL sendo chamada: ${request.url}`);

    console.log(`Método: ${request.method}`);
    //Exibindo qual foi o método utilizado

    

    response.end();
    //Encerro minha requisição

});

//Com a constante server, quero 'ouvir' na porta 3000 e posso informar o host e uma callback para exibir no console quando o servidor estiver funcionando
server.listen(4000);