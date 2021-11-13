/**
 * Montar procedimento que fique verificando as informacoes do computador
 * e as transmita via serial
 * 
 * [] Montar json com as informacoes
 * [] Transmitir via serial
 */

import { System } from './classes/system'

const system = new System()

system.complete()
.then(console.log)



// import { time, cpu, system, cpuTemperature, mem, networkStats, graphics } from 'systeminformation'



// async function executaTeste(funcao: Function, nome: String): Promise<void> {
//     console.log('---------------------------')
//     console.log(`/** ${nome} **/`)
//     console.log(await funcao())
// }

// async function testes(): Promise<void> {
//     await executaTeste(time, 'Hora')
//     await executaTeste(mem, 'Memória')
//     await executaTeste(cpuTemperature, 'Temperatura da CPU')
//     await executaTeste(system, 'Sistema')
//     await executaTeste(cpu, 'CPU')
//     await executaTeste(networkStats, 'Internet')
//     await executaTeste(graphics, 'Graficos')
// }

// testes()

