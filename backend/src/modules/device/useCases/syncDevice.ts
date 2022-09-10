import { Request, Response } from 'express'

import Device from '@device'
import { IDevice } from '../interface'

function syncDevice(request: Request, response: Response) {
    let {
        id,
        name,
        updated,
        cpuName,
        cpuUsage,
        cpuTemperature,
        gpuName,
        gpuUsage,
        gpuTemperature,
        ram,
        ramUsed
    } = request.body as IDevice

    if (!id) id = ''
    if (!updated) updated = new Date().toJSON()

    const item = Device.sync({
        id,
        name,
        updated,
        cpuName,
        cpuUsage,
        cpuTemperature,
        gpuName,
        gpuUsage,
        gpuTemperature,
        ram,
        ramUsed
    })

    return response.status(201).json(item)
}

export default syncDevice