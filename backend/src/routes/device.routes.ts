import { Router } from 'express'

import auth from '@middlewares/auth'

import syncDevice from '@device/syncDevice'

const devicesRouter = Router()

devicesRouter.put('/', auth, syncDevice)

export default devicesRouter