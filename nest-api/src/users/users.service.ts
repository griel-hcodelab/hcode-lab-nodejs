/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    list(){

        return 'Listando todos os usuários';

    }

    save(data: any)
    {
        if (!data) {
            throw new BadRequestException('Informe o nome do usuário')
        }

        return `Dados salvos com sucesso. ${data}`
    }

    get(id: number)
    {
        return `Obtive o usuário ${id}`;
    }

    update()
    {

    }

    remove(id: number)
    {
        return `Exclui o usuário ${id}`
    }

}
