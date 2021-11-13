import axios from 'axios'

import { openwatcherApi } from '../config/keys.json'

async function getTemperature(): Promise<{ temp: number, description: string }> {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=3455298&appid=${openwatcherApi}&lang=pt_br&units=metric`)

    let temp = data?.main?.temp || 0
    let description = ''

    if (data?.weather?.length > 0) {
        description = data.weather[0].description
    }

    return { temp, description }
}

export { getTemperature }