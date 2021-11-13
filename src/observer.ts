/**
 * Montar procedimento que fique verificando as informacoes do computador
 * e as transmita via serial
 * 
 * [] Montar json com as informacoes
 * [] Transmitir via serial
 */

import { Bridge } from './classes/bridge'

const bridge = new Bridge()
setInterval(() => {
    bridge.send()
}, 1000)
