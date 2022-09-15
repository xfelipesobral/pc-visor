import { Request, Response } from 'express'

import Device from '../service'

async function displayDevices(request: Request, response: Response) {
    
    try {
        const devices = await Device.findAll()

        return response.status(201).json({ devices })
    } catch (e) {
        return response.status(201).json({ devices: [] })
    }
}

export default displayDevices