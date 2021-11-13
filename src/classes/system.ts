import { time, mem, cpu, cpuTemperature } from 'systeminformation'

import { ISystem, ISystemDTO } from '../interfaces/ISystem'

class System implements ISystem {

    async complete(): Promise<ISystemDTO> {
        const { total: ram, used: ramUsed } = await this.ram()
        const { name: cpuName, max: cpuMax, min: cpuMin } = await this.cpu()

        const systemInfo: ISystemDTO = {
            name: '',
            datetime: '',
            cpuName,
            cpuMax,
            cpuMin,
            ram,
            ramUsed
        }

        return systemInfo
    }

    async basic(): Promise<{ name: string; datetime: string; }> {
        throw new Error('Method not implemented.')
    }

    async cpu(): Promise<{ name: string; min: number; max: number; }> {
        const { manufacturer, brand } = await cpu()
        const { max, main } = await cpuTemperature()

        return {
            name: `${manufacturer} - ${brand}`,
            min: main,
            max: max
        }
    }

    async ram(): Promise<{ total: number; used: number; }> {
        const { total, used } = await mem()

        return { total, used }
    }

}

export { System }