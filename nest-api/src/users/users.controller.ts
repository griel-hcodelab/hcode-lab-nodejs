import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';

//Sempre que houver uma rota /users, será invocada esse controller
@Controller('users')
export class UsersController {

    @Get()
    getUsers() {

        return 'Listando todos os usuários';

    }

    @Post()
    create(@Body('name') nome_qualquer, @Body() body) {

        return nome_qualquer;

    }

    @Put('/:id')
    update(
        @Param('id') nome_que_estou_esperando: Number,
        @Body() body_do_update
        ) {

        return {
            nome_que_estou_esperando,
            body_do_update
        };

    }

    @Delete('/:id')
    remove(@Param('id') id:Number, @Res() response) {

        response.send({ id })

        //return { id }

    }

}
