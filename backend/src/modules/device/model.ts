import { IDevice, IDeviceRepository } from './interface'

import { read, sync } from '@data'

const moduleName = 'devices'

class DeviceModel implements IDeviceRepository {

    findAll(): IDevice[] {
        return read(moduleName)
    }

    sync(device: IDevice): IDevice {
        const id = sync(moduleName, device)
        return this.findById(id)
    }

    findById(id: string): IDevice {
        const devices = this.findAll()
        return devices.find(item => item.id === id)
    }
}

export default DeviceModel