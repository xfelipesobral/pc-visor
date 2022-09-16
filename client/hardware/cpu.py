import cpuinfo, psutil

def informations():
    cpu = {
        'name': cpuinfo.get_cpu_info()['brand_raw'],
        'percentUsage': psutil.cpu_percent(),
        'temperature': 0
    }
    
    return cpu