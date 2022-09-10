import { Router, Request, Response } from 'express'

import devicesRouter from './device.routes'

const router = Router()

router.get('/', (request: Request, response: Response) => {
    response.json({
        status: 'online'
    })
})

router.use('/devices', devicesRouter)

export default router