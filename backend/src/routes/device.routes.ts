import { Router } from 'express'

import auth from '../middlewares/auth'

import syncDevice from '../modules/device/useCases/syncDevice'

const devicesRouter = Router()

devicesRouter.put('/', auth, syncDevice)

export default devicesRouter