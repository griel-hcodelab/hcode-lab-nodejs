import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){

        //Estou injetando dentro dessa classe um atributo privado cujo tipo será minha classe UserService
        //Deste modo posso trazer todos os métodos do serviço

    }

    @Get()
    read(){

        return this.usersService.list()

    }

    @Post()
    create(@Req() variavel_com_qualqur_nome, @Body('name') body, @Body('password') password){
        //Posso usar qualquer nome como a variável que vai receber o campo do POST
        return this.usersService.save(body);

    }

    @Put('/:id')
    update(@Param('id') userId, @Body() body) {

        const user = this.usersService.get(userId);

        return this.usersService.save(body)

    }

    @Delete('/:id')
    remove(@Param('id') userId: number){

        return this.usersService.remove(userId)


    }

}
