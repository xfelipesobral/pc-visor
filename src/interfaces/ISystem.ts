interface ISystemDTO {
    name: string
    datetime: string
    cpuName: string
    cpuMin: number
    cpuMax: number
    ram: number
    ramUsed: number
}

interface ISystem {
    complete(): Promise<ISystemDTO>
    basic(): Promise<{ name: string, datetime: string }>
    cpu(): Promise<{ name: string, min: number, max: number }>
    ram(): Promise<{ total: number, used: number }>
}

export { ISystemDTO, ISystem }