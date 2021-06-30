import express from 'express'
import cors from 'cors'
import api from '../api/api'


class App {

    public express: express.Application

    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    private middlewares () :void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private routes (): void {
        this.express.get('/index/', api.listAllStates)
        this.express.get('/state/:state', api.listByStates)
        this.express.get('/city/:city', api.listByCity)
    }
}


export default new App().express