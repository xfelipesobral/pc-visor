interface IDevice {
    id: string
    name: string
    updated: string
    cpuName: string
    cpuUsage: number
    cpuTemperature: number
    gpuName: string
    gpuUsage: number
    gpuTemperature: number
    ram: number
    ramUsed: number
    city: string
    cityTemperature: number
    cityTemperatureStatus: string
}

interface IDeviceRepository {
    sync(device: IDevice): IDevice // Case not exists create, if exists update
    findById(id: string): IDevice // Return device from id
    findAll(): Array<IDevice> // Return all devices
}

export { IDevice, IDeviceRepository }