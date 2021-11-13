import { mem, cpu, cpuTemperature } from 'systeminformation'

import { getTemperature } from '../utils/getTemperature'
import { IDisplayDTO, IDisplay } from '../interfaces/IDisplay'

class Display implements IDisplay {

    async complete(): Promise<IDisplayDTO> {
        const { name: cpuName, main: cpuMain, max: cpuMax } = await this.cpu()
        const { total: ram, used: ramUsed } = await this.ram()
        const { name, datetime, temperature, temperatureCity, temperatureDescription } = await this.basic()

        const display: IDisplayDTO = {
            name,
            datetime,
            cpuName,
            cpuMain,
            cpuMax,
            ram,
            ramUsed,
            temperature,
            temperatureCity,
            temperatureDescription
        }

        return display
    }
    async basic(): Promise<{ name: string; datetime: string; temperature: number; temperatureCity: string, temperatureDescription: string }> {
        const { temp, description } = await getTemperature()
        const date = new Date()
        
        return {
            name: 'Felipe PC',
            datetime: date.toLocaleString(),
            temperature: temp,
            temperatureCity: 'Palotina - PR',
            temperatureDescription: description
        }
    }

    async cpu(): Promise<{ name: string; main: number; max: number }> {
        const { manufacturer, brand } = await cpu()
        const { max, main } = await cpuTemperature()

        return {
            name: `${manufacturer} - ${brand}`,
            main: main || 0,
            max: max || 0
        }
    }

    async ram(): Promise<{ total: number; used: number }> {
        const { total, used } = await mem()
        return { total, used }
    }

}

export { Display }