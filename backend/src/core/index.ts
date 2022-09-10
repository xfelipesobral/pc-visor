import fs from 'fs'

const spacer = '#'

function readFile(moduleName: string): Array<string> {
    try {
        return fs.readFileSync(`data/${moduleName}.csv`, 'utf-8').split(/\r?\n/)
    } catch (e) {
        return []
    }
}

function writeFile(moduleName: string, arrLines: Array<string>) {
    let lines = ''

    arrLines.forEach((item, i) => {
        lines += (i === 0 ? '' : '\r\n') + item
    })

    fs.writeFileSync(`data/${moduleName}.csv`, lines)
}

function read(moduleName: string) {
    const data = readFile(moduleName)
    const objects = []

    const keys = data[0].split(spacer)
    data.forEach((item, itemI) => {
        if (itemI === 0) return

        const values = item.split(spacer)
        const object = {}

        keys.forEach((key, keyI) => object[key] = values[keyI])

        objects.push(object)
    })

    return objects
}

function sync(moduleName: string, object: string | object): string {
    const data = readFile(moduleName)
    let line = ''

    if (typeof object === 'object') {
        if (!object['id']) {
            object['id'] = data.length
        }

        Object.keys(object).forEach((key, i) => {
            line += `${i === 0 ? '' : '#'}${object[key]}`
        })
    } else {
        line = object
    }

    const values = line.split(spacer)

    for (let i = 0; i < data.length; i++) {
        if (data[i].split(spacer)[0] === values[0]) {
            data[i] = line

            writeFile(moduleName, data)
            return values[0]
        }
    }
    
    data.push(line)

    writeFile(moduleName, data)
    return String(data.length - 1)
}

export {
    read,
    sync
}