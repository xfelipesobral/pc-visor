# pip install psutil GPUtil py-cpuinfo
import time, platform, psutil, GPUtil, cpuinfo, requests, uuid

def send(cpuUsage, cpuTemperature, gpuName, gpuUsage, gpuTemperature, ram, ramUsed):
    body = {
        'id': serial,
        'name': name,
        'cpuName': cpuName,
        'cpuUsage': cpuUsage,
        'cpuTemperature': cpuTemperature,
        'gpuName': gpuName,
        'gpuUsage': gpuUsage,
        'gpuTemperature': gpuTemperature,
        'ram': ram,
        'ramUsed': ramUsed
    }
    
    requests.put(api, json = body, headers = { 'authorization': password })
    print('Informations sent')

def bytesToGigabytes(bytes):
    return bytes / 1073741824

def monit():
    # CPU Informations
    cpuUsage = psutil.cpu_percent()
    cpuTemperature = 0

    # GPU Informations
    gpuName = cpuName
    gpuUsage = cpuUsage
    gpuTemperature = cpuTemperature

    gpus = GPUtil.getGPUs()
    if len(gpus) > 0:
        gpu = gpus[0]
        gpuName = gpu.name
        gpuUsage = gpu.load * 100
        gpuTemperature = gpu.temperature
        
    # RAM Informations
    svmem = psutil.virtual_memory()
    ram = bytesToGigabytes(svmem.total)
    ramUsed = ram - bytesToGigabytes(svmem.available)
    
    send(cpuUsage, cpuTemperature, gpuName, gpuUsage, gpuTemperature, ram, ramUsed)
    
# ======================================================================================

# Config
password = 'teste'
serial = uuid.getnode() # Mac Address
api = 'http://localhost:3300/devices'

name = platform.node()

cpuInfo = cpuinfo.get_cpu_info()
cpuName = cpuInfo['brand_raw']

while(True):
    monit()
    time.sleep(5)
    