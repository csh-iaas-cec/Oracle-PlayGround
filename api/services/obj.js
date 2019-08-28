var ocirest = require('./ocirest.js');

function put( auth, parameters, callback ){
    //var fs = require('fs');
    //var buffer = fs.readFileSync(parameters.fileName);
    var possibleHeaders = ['opc-client-request-id', 'if-match', 'if-match-none', 'expect',
                           'content-length', 'content-MD5', 'content-type', 'content-language',
                           'content-encoding' ];
    var headers = ocirest.buildHeaders( possibleHeaders, parameters, true );
    ocirest.process( auth,
                     { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                              '/b/' + encodeURIComponent(parameters.bucketName) + 
                              '/o/' + encodeURIComponent(parameters.objectName),
                       host : "objectstorage.us-ashburn-1.oraclecloud.com",
                       headers : headers,
                       body : parameters.body,
                       method : 'PUT' },
                     callback ); 
  }

  module.exports = {
      put: put
  }