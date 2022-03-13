import express, { Request, Response } from 'express';



const api = express()
api.use('/test', (request: Request, response: Response) => {
    response.json({ success: true })
})





api.listen(3000, () => console.log('Servidor rodando'))