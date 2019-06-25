'use strict';
var request = require("request");

class GetContentService{

    getContentCall(req,callback){
     
       
        var options = { method: 'GET',
          url: 'https://api.github.com/repos/csh-iaas-cec/Oracle-PlayGround/contents/var.tf',
          headers: 
           { 'cache-control': 'no-cache',
             Connection: 'keep-alive',
             Host: 'api.github.com',
             'Cache-Control': 'no-cache',
             Accept: '*/*',
             'User-Agent': 'PostmanRuntime/7.15.0',
             //auth to be added
             'Content-Type': 'application/json' } };
        
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
        
        //   console.log(response);
          callback(null,body);
        });
    }

    putContentCall(req,callback){
        // console.log("=== request for upload===",req);
        // let data = req.body;  
        // let buff = new Buffer.alloc(data);  
        // let base64data = buff.toString('base64');
        var options = { method: 'PUT',
  url: 'https://api.github.com/repos/csh-iaas-cec/Oracle-PlayGround/contents/var.tf',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Host: 'api.github.com',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.15.0',
     //auth to be added
     'Content-Type': 'application/json' },
  body: 
   { message: 'my commit message',
     committer: { name: 'csh-iaas-cec', email: 'ravi.devarakonda@oracle.com' },
     content: "dmFyIHJlZ2lvbiB7CiAgICAgZGVmYXVsdCA6ICJ1cy1hc2hidXJuLTEiCn0=",
     sha: '61cfcf04218e50585e377c3349814bf79322455e' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  callback(null,body);
});
    }

}
module.exports = GetContentService;