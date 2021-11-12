import { cpu, system, cpuTemperature, mem, networkStats, graphics } from 'systeminformation'

async function executaTeste(funcao: Function, nome: String): Promise<void> {
    console.log('---------------------------')
    console.log(`/** ${nome} **/`)
    console.log(await funcao())
}

async function testes(): Promise<void> {
    await executaTeste(mem, 'Memória')
    await executaTeste(cpuTemperature, 'Temperatura da CPU')
    await executaTeste(system, 'Sistema')
    await executaTeste(cpu, 'CPU')
    await executaTeste(networkStats, 'Internet')
    await executaTeste(graphics, 'Graficos')
}

testes()

