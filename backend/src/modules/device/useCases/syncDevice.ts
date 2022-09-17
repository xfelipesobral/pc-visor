import { Request, Response } from 'express'

import Device from '../service'

function round(n: number) {
    return Math.round(Number(n.toFixed(2)) * 100)
}

interface IBody {
	cpu: {
		name: string
		percentUsage: number
		temperature: number
	},
	gpu: {
		name: string
		percentUsage: number
		temperature: number
	},
	ram: {
		total: number
		used:  number
	},
	id: string,
	name: string
}

async function syncDevice(request: Request, response: Response) {
    const {
        id,
        name,
        cpu,
        gpu,
        ram
    }: IBody = request.body

    try {
        const device = await Device.sync({
            id: String(id),
            name: name,
            cpuName: cpu.name,
            cpuUsage: round(cpu.percentUsage),
            cpuTemperature: round(cpu.temperature),
            gpuName: gpu.name,
            gpuUsage: round(gpu.percentUsage),
            gpuTemperature: round(gpu.temperature),
            ram: round(ram.total),
            ramUsed: round(ram.used),
            createdAt: undefined,
            updatedAt: undefined
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