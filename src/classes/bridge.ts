import SerialPort from 'serialport'

import { IBridge } from '../interfaces/IBridge'

class Bridge implements IBridge {
    serial: SerialPort = new SerialPort('/dev/cu.usbserial-1110', {
        baudRate: 9600
    })

    async send(): Promise<void> {
        this.serial.write('teste') 
    }
}

export { Bridge }