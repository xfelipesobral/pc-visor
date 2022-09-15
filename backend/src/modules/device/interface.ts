import { Device as IDevice } from "@prisma/client"

interface IDeviceRepository {
    sync(device: IDevice): Promise<IDevice> // Case not exists create, if exists update
    findById(id: string): Promise<IDevice> // Return device from id
    findAll(): Promise<Array<IDevice>> // Return all devices
}

export { IDevice, IDeviceRepository }