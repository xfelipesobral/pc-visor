from time import sleep
from api import api
from hardware import cpu, gpu, ram  

def monit():
    pc = {}
    
    pc['cpu'] = cpu.informations()
    pc['gpu'] = gpu.informations()
    pc['ram'] = ram.informations()
    
    api.send(pc)
    
while(True):
    monit()
    sleep(60)