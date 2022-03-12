import express from 'express';



const api = express()

api.get('/test', () => {
    res.jason({message: 'ok'})
})

api.listen(3000, () => console.log('Express listening'))