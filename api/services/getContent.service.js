'use strict';
var request = require("request");
// require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
//var config = require('../config')
var fs = require('fs');
var https = require('https');
var os = require('os');
var httpSignature = require('http-signature');
var jsSHA = require("jssha");

class GetContentService{


  
  // sign(request, options) {

  //   var apiKeyId = options.tenancyId + "/" + options.userId + "/" + options.keyFingerprint;

  //   var headersToSign = [
  //       "host",
  //       "date",
  //       "(request-target)"
  //   ];

  //   var methodsThatRequireExtraHeaders = ["POST", "PUT"];

  //   if(methodsThatRequireExtraHeaders.indexOf(request.method.toUpperCase()) !== -1) {
  //       options.body = options.body || "";

  //       var shaObj = new jsSHA("SHA-256", "TEXT");
  //       shaObj.update(options.body);

  //       request.setHeader("Content-Length", options.body.length);
  //       request.setHeader("x-content-sha256", shaObj.getHash('B64'));

  //       headersToSign = headersToSign.concat([
  //           "content-type",
  //           "content-length",
  //           "x-content-sha256"
  //       ]);
  //   }

  //   httpSignature.sign(request, {
  //       key: options.privateKey,
  //       keyId: apiKeyId,
  //       headers: headersToSign
  //   });

  //   var newAuthHeaderValue = request.getHeader("Authorization").replace("Signature ", "Signature version=\"1\",");
  //   request.setHeader("Authorization", newAuthHeaderValue);
  // }

  // handleRequest(callback) {

  //   return function(response) {
  //       var responseBody = "";

  //       response.on('data', function(chunk) {
  //       responseBody += chunk;
  //   });

  //       response.on('end', function() {
  //           callback(null, JSON.parse(responseBody));
  //       });
  //   }
  // }

  // getJob(req, callback) {

  //   var tenancyId = config.tenancyId;
  //   var authUserId = config.authUserId;
  //   var keyFingerprint = config.keyFingerprint;
  //   var privateKeyPath = config.privateKeyPath;
  //   var resourceDomain = config.resourceDomain;
  //   var jobId = "ocid1.ormjob.oc1.iad.aaaaaaaazaqo3pokn4mbzeihztve7wj5pbmxs27q74p7skstk7rjsb767unq";
  //   privateKeyPath = privateKeyPath.replace("~", os.homedir())
  //   var privateKey = fs.readFileSync(privateKeyPath, 'ascii');

  //     var options = {
  //         host: resourceDomain,
  //         path: "/20180917/jobs/"+jobId ,
  //     };

  //     var request = https.request(options, this.handleRequest(callback));
  //     this.sign(request, {
  //         privateKey: privateKey,
  //         keyFingerprint: keyFingerprint,
  //         tenancyId: tenancyId,
  //         userId: authUserId
  //     });

  //     request.end();
  // }



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



    getOcid(req,callback){
      var options = { method: 'GET',
      "rejectUnauthorized": false, 
      url: 'https://loyvqirq7pnrdcxamvak67uxoq.apigateway.us-phoenix-1.oci.customer-oci.com/v1/myfn',
      headers: 
       { 'cache-control': 'no-cache',
         Connection: 'keep-alive',
         Host: 'loyvqirq7pnrdcxamvak67uxoq.apigateway.us-phoenix-1.oci.customer-oci.com',
         'Cache-Control': 'no-cache',
         Accept: '*/*',
         'User-Agent': 'PostmanRuntime/7.15.0',
         //auth to be added
         'Content-Type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
      callback(null,body);
    });
  }
}
module.exports = GetContentService;