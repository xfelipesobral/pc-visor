# pip install psutil GPUtil py-cpuinfo
#import json, time, platform, psutil, GPUtil, cpuinfo, requests, uuid
from time import sleep
from api import api
from hardware import cpu, gpu, ram  

def monit():
    print(cpu.informations())
    print(gpu.informations())
    print(ram.informations())
    #api.send()
    
while(True):
    monit()
    sleep(5)