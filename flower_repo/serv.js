var http = require('http');
var fs = require('fs');

var requestHandler = function(request, response){
	console.log(request.url);
	if(request.url=="/")	
		response.end(fs.readFileSync('flowerCatalog.html'));
	else if(request.url=="/favicon.ico")
		response.end();
	else{
		response.end(fs.readFileSync("."+request.url));
	}
	response.end();
}

var server = http.createServer(requestHandler);
server.listen(8000);	