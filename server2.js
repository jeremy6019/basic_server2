var http = require("http");
var cars = {
    "list":[
        {
            "name":"벤츠",
            "price":9000
        },
        {
            "name":"아우디",
            "price":8000
        },
        {
            "name":"BMW",
            "price":6000
        }
    ]
};

var server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var str = JSON.stringify(cars);
    response.end(str);
});

server.listen(7777,function(){
    console.log("the server is running at 7777 port...");
});