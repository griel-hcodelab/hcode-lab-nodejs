import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';


//Sempre que houver uma rota /users, será invocada esse controller
@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService) { }

    @Get()
    read() {

        return this.UsersService.list()

    }

    @Post()
    create(@Body('name') nome_qualquer, @Body() body) {

        return this.UsersService.save(body);

    }

    @Put('/:id')
    update(
        @Param('id') nome_que_estou_esperando: Number,
        @Body() body_do_update
        ) {

        const user = this.UsersService.get(nome_que_estou_esperando);

        return this.UsersService.save(body_do_update);

    }

    @Delete('/:id')
    remove(@Param('id') id:Number, @Res() response) {

        return this.UsersService.delete(id);

    }

}
