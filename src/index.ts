import express, { Request, Response } from 'express';

import { URLController } from 'controller/URLController';


const api = express()
api.use(express.json())

const urlController = new URLController()
api.post('/shorten', urlController.shorten)

api.use('/test', (request: Request, response: Response) => {
    response.json({ success: true })
})





api.listen(3000, () => console.log('Servidor rodando'))