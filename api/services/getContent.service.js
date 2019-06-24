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
             //add authorize token
             'Content-Type': 'application/json' } };
        
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
        
        //   console.log(response);
          callback(null,body);
        });
    }

    putContentCall(req,callback){
        console.log("=== request for upload===",req);

        var options = { method: 'PUT',
  url: 'https://api.github.com/repos/csh-iaas-cec/Oracle-PlayGround/contents/var.tf',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'content-length': '211',
     'accept-encoding': 'gzip, deflate',
     Host: 'api.github.com',
     'Postman-Token': 'f79debc7-da4a-41d3-96fc-b823d02e2681,b7ebb1d2-dc87-4dbd-854e-8b4a579f2c87',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.15.0',
     //add authorize token
     'Content-Type': 'application/json' },
  body: 
   { message: 'my commit message',
     committer: { name: 'csh-iaas-cec', email: 'ravi.devarakonda@oracle.com' },
     content: req.body,
     sha: 'e4d3ec48b1faa2789c9db6c443e9774beb26d240' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  callback(null,body);
});
    }

}
module.exports = GetContentService;