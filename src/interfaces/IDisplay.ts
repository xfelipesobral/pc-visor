interface IDisplayDTO {
    name: string
    datetime: string
    cpuName: string
    cpuMain: number
    cpuMax: number
    ram: number
    ramUsed: number,
    temperature: number,
    temperatureCity: string,
    temperatureDescription: string
}

interface IDisplay {
    complete(): Promise<IDisplayDTO>
    basic(): Promise<{ name: string, datetime: string, temperature: number, temperatureCity: string, temperatureDescription: string }>
    cpu(): Promise<{ name: string, main: number, max: number }>
    ram(): Promise<{ total: number, used: number }>
}

export { IDisplayDTO, IDisplay }