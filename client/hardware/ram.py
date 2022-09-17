import psutil

def bytesToGigabytes(bytes):
    return bytes / 1073741824

def informations():
    mem = psutil.virtual_memory()
    
    ram = {
        'total': bytesToGigabytes(mem.total),
        'used': bytesToGigabytes(mem.available),
    }
    
    ram['used'] = ram['total'] - ram['used']
    
    return ram