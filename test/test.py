import requests
import json

response = requests.post('https://localhost:5000/', json={'raw': ["测试文本 1 号", "测试文本 2 号"]})

try:
    print(json.dumps(response.json(), indent=4, ensure_ascii=False))
except:
    print(response.content)