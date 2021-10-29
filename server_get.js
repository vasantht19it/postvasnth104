http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("URL"+url);
    var query=url.parse(request.url).query;
    console.log("QUERY"+query);
    
    var name1=querystring.parse(query)["name"];
    var name2=querystring.parse(query)["eid"];
    var name3=querystring.parse(query)["experience"];
    var name4=querystring.parse(query)["gender"];
    var name5=querystring.parse(query)["branch"];
    var name7=querystring.parse(query)["email"];
    var name8=querystring.parse(query)["number"];
    var name9=querystring.parse(query)["oraganisation"];
	response.write("NAME      :"+name1+"  \n\nEMPLOYEE ID      :"+name2+" \n\nORAGANISATION      :"+name9+"\n\nGENDER      :"+name4+" \n\nBRANCH      : "+name5+" \ \n\nEMAIL      :"+name7+" \n\nPHONE NUMBER      :"+name8+"\n\nEXPERIENCE IN YEAR:"+name3);
    response.end();
}
http.createServer(onRequest).listen(8001);