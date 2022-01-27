import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response)=>{

    res.send('Acessou o usuários');

});

router.post('/', (req: Request, res:Response)=>{

    res.send(req.body)

});

router.put('/:id', (req: Request, res:Response)=>{

    res.send({
        params: req.params,
        body: req.body
    })

});

router.delete('/:id', (req: Request, res: Response)=>{
    res.send({
        message: `O usuário ${req.params.id} foi excluído`,
        method: req.method
    })
})

export default router;