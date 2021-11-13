import { IBridge } from '../interfaces/IBridge'

class Bridge implements IBridge {
    send(port: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}