var http=require('http');
var querystring=require('querystring');
http.createServer(function(req,res)
{
        var data1='';
        req.on('data',function (chunk)
        { 
             data1+=chunk;
        });
        req.on('end',function()
        {
               qs=querystring.parse(data1);
    var name1= qs["name"];
    var name2= qs["eid"];
    var name4= qs["gender"];
    var name5= qs["branch"];
    var name6= qs["experience"];
    var name7= qs["eid"];
    var name8= qs["number"];
    res.write("NAME      :"+name1+"  \n\nEMPLOYEE ID :"+name2+" \n\nGENDER   : "+name4+" \n\nBRANCH:    "+name5+" \n\nEXPERIENCE IN YEAR : "+name6+" \n\nEMAIL:   "+name7+" \n\nPHONE NUMBER:  "+name8);
    res.end();
        });
}).listen (8080);