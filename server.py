import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
m = 'GET / HTTP/1.0\r\nHost: www.cnn.com\r\n\r\n'
s.connect(('localhost', 8000))
s.sendall(m)
data = s.recv(1024)
s.close()
