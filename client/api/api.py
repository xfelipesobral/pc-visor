import os, json, requests, uuid

def getConfigs():
    directory = os.getcwd()
    fileName = 'pc_visor_config.json'

    try:
        with open(fileName, 'r') as f:
            return json.load(f)
    except:
        print('Create config file ("'+fileName+'") in '+directory)
        return False

def send(body):
    config = getConfigs()
    
    if config == False:
        return
    
    body['id'] = uuid.getnode()
    body['name'] = config['description']
    
    print('Informations send to '+config['api'])
    requests.put(config['api']+'/devices', json = body, headers = { 'authorization': config['password'] })