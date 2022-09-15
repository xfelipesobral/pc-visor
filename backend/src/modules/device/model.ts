import { IDevice, IDeviceRepository } from './interface'
import { PrismaClient } from '@prisma/client'

class DeviceModel implements IDeviceRepository {
    private prisma = new PrismaClient().device

    findAll(): Promise<IDevice[]> {
        return this.prisma.findMany()
    }

    async sync(data: IDevice): Promise<IDevice> {
        const device = await this.findById(data.id)

        if (!device) {
            return this.prisma.create({ data })
        }

        data.updatedAt = new Date()

        return this.prisma.update({
            where: {
                id: data.id
            },
            data
        })
    }

    findById(id: string): Promise<IDevice> { 
        return this.prisma.findUnique({
            where: {
                id
            }
        })
    }
}

export default DeviceModel