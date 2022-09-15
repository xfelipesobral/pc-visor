import { Router } from 'express'

import auth from '../middlewares/auth'

import syncDevice from '../modules/device/useCases/syncDevice'
import displayDevices from '../modules/device/useCases/displayDevices'

const devicesRouter = Router()

devicesRouter.put('/', auth, syncDevice)
devicesRouter.get('/', auth, displayDevices)

export default devicesRouter