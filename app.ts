import express, {Request, Response, NextFunction} from 'express';

const app = express()


app.get('/users', (req: Request, res: Response) => {
    res.json({users: 'allusers'})
})

app.get('/users/1', (req: Request, res: Response) => {
    res.json({users: 'user 1'})
})

// if its test then we don't need to run app.listen.
// or you should write app.listen in another file such
// as server.js
if(process.env.TYPE !== 'test'){
    app.listen(process.env.PORT, () => {
        console.log(`App listening on http://localhost:${process.env.PORT}`)
    })
}

export default app