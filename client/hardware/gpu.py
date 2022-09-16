import GPUtil

def informations():
    gpu = {
        'name': '',
        'percentUsage': 0,
        'temperature': 0
    }
    
    gpus = GPUtil.getGPUs()
    if len(gpus) > 0:
        mainGpu = gpus[0]
        
        gpu['name'] = mainGpu.name
        gpu['percentUsage'] = gpu.load * 100
        gpu['temperature'] = gpu.temperature
    
    return gpu