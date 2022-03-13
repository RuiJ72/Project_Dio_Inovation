import express, { Request, Response } from 'express';

import { URLController } from 'controller/URLController';
import { MongoConnection } from 'database/MongoConnection';


const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()

api.post('/shorten', urlController.shorten)
api.get('/:hash, urlController.redirect')

/*api.use('/test', (request: Request, response: Response) => {
    response.json({ success: true })
})*/





api.listen(3000, () => console.log('Servidor rodando'))