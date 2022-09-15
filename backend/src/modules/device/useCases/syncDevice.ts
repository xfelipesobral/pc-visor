import { Request, Response } from 'express'

import Device from '../service'

function round(n: string) {
    return Math.round(Number(Number(n).toFixed(2)) * 100)
}

async function syncDevice(request: Request, response: Response) {
    const body: any = request.body

    try {
        const device = await Device.sync({
            id: String(body.id),
            name: body.name,
            cpuName: body.cpuName,
            cpuUsage: round(body.cpuUsage),
            cpuTemperature: round(body.cpuTemperature),
            gpuName: body.gpuName,
            gpuUsage: round(body.gpuUsage),
            gpuTemperature: round(body.gpuTemperature),
            ram: round(body.ram),
            ramUsed: round(body.ramUsed),
            createdAt: body.createdAt,
            updatedAt: body.updatedAt
        })

        return response.status(201).json({ device })
    } catch (e) {
        console.log(e)

        return response.status(403).send({ 
            message: 'Error on create or update a device. Check fields and try again' 
        })
    }

}

export default syncDevice