//const express = require('express'); Modo CommonJS
import express, { Request, Response } from 'express'; //Modo ESModule
import bodyParser from 'body-parser';
import routesUsers from './routes/users'; //Trazendo o arquivo das rotas

const app = express();

app.use(bodyParser.urlencoded());
//O bodyparser precisa sempre vir logo após a declaração da constante do express

app.use('/users', routesUsers); //Toda chamada para /users será direcionda para o arquivo de rotas próprio


app.get('/', (req: Request, res: Response)=>{

    res.send('API em Express usando TypeScript!');

});



app.listen(3000, ()=>{
    console.log('Server Running');
});