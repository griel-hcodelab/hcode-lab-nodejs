import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    list() {

        return 'Listando todos os usuários';

    }

    save(data: any) {

        if (!data.name) {
            throw new BadRequestException('Infome o nome do usuário');
        }

        return 'Dados salvos com sucesso';

    }

    get(id: Number) {

        return `Retornando os dados do usuário ID ${id}`;

    }

    delete(id: Number) {

        return `Excluindo o usuário ID ${id}`;

    }


}
