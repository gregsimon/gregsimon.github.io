import SimpleHTTPServer
import SocketServer
import webbrowser

PORT = 8000

#http.server.SimpleHTTPRequestHandler(request, client_address, server, directory=None

def myHandler(request, client_address, server, directory=None):
  SimpleHTTPServer.SimpleHTTPRequestHandler(request, client_address, server, directory)

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
#Handler = myHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print ("LAY content serving at port", PORT)
print ("****************************************************************")
print ("*")
print ("* Use to get index page:  http://localhost:8000/start/")
print ("*")
print ("****************************************************************")
url = "http://localhost:8080/start/"
httpd.serve_forever()

# Load the start page
webbrowser.open(url)
