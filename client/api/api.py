import json, requests, uuid

with open('config.json', 'r') as f:
    config = json.load(f)

def send(body):
    body['id'] = uuid.getnode()
    body['name'] = config['description']
    
    requests.put(config['api'], json = body, headers = { 'authorization': config['password'] })