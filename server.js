//get,post 요청처리!! 
var http = require("http"); //웹서버 관련 모듈 
var url = require("url"); //요청 url모듈 
var qs = require("querystring");

//서버객체 생성 
var server = http.createServer(function(request, response){
    //요청과 응답 처리 
    
    //get방식을 요청이 들어왔을때 파라미터 처리 
    console.log("클라아언트의 요청방식은", request.method);
    var content="";//post요청의 데이터를 누적시킬 변수 

    if(request.method=="GET"){
        //클라이언트의 요청을 해석할 수 있는 모듈(URL)
        //console.log(request.url);
        const urlObj = url.parse(request.url,true);
        //get방식은 url을 타고 데이터가전송되고 쿼리스트링이라 한다 
        //console.log(urlObj.query)
        console.log("id는",urlObj.query.id);
        console.log("pass는",urlObj.query.pass);

    }else if(request.method=="POST"){
        request.on("data",function(data){
            //data를 그대로 쓰기에는 무리가 있다 
            //가공이 필요함(querystring 모듈필요)
            content += data; //누적 
            var str = qs.parse(content);
            console.log("id는",str.id);
            console.log("pass는",str.pass);
        });

    }

    //header정보 구성 
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    response.end("hi nice to meet you!!")
});
server.listen(9999,function(){
    console.log("The server is running at 9999 port...");
});
