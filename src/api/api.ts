import { Request, Response } from 'express'
import states from '../api/api.model'


class Api {

    // Lista todos os estados 
    async listAllStates(req: Request, res: Response) {
        await states.find({})
        .then((response) => {
            res.status(200).send(response)
        }).catch(() => {
            res.status(400).send({ error: 'sorry but something went wrong' })
        })
    }

    // Lista por estados
    async listByStates(req: Request, res: Response) {
        await states.find({})
            .then((response) => {

                let listStates: string[] = []
                let search = req.params.state

                for (let index = 0; index < response.length; index++) {
                    if (response[index].state == search)
                        listStates.push(response[index])
                }

                if (listStates.length >= 1)
                    res.status(200).send({ response: listStates })
                else
                    throw new Error()

            }).catch(() => {
                res.status(400).send({ error: 'sorry but something went wrong' })
            })

    }


    async listByCity(req: Request, res: Response) {

        let search = req.params.city
        
        await states.findOne({ city: { $regex: '(?i)' + search + '(?-i)', $options: 'i' } })
        .then((response) => {
            res.status(200).send({ response })
        }).catch(() => {
            res.status(400).send({ error: 'sorry but something went wrong' })
        })

    }

}


export default new Api