import socket
import json

l ='{"id": 2, "name": "abc"}'
jsonObj = json.dumps(l)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
m = 'POST / HTTP/1.0\r\nHost: www.cnn.com\r\nData:'+jsonObj+'\r\n\r\n'
s.connect(('localhost', 8000))
s.sendall(m)
data = s.recv(1024)
s.close()
