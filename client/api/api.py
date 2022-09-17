import os, json, requests, uuid

def getConfigs():
    directory = os.getcwd()
    fileName = 'pc_visor.config'

    try:
        with open(fileName, 'r') as f:
            return json.load(f)
    except:
        with open(fileName, 'w') as f:
            f.write('{ "api": "http://localhost:3300", "password": "strongpassword", "description": "Testing device" }')
            
        print('Edit config file in '+directory+'/'+fileName)
        return False

def send(body):
    config = getConfigs()
    
    if config == False:
        return
    
    body['id'] = uuid.getnode()
    body['name'] = config['description']
    
    try:
        requests.put(config['api']+'/devices', json = body, headers = { 'authorization': config['password'] })
        print('Informations send to '+config['api'])
    except:
        print(config['api']+' not accessible')