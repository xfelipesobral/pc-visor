import { Router } from 'express'

import syncDevice from '@device/syncDevice'

const devicesRouter = Router()

devicesRouter.put('/', syncDevice)

export default devicesRouter