var os = require('os');
var fs = require('fs');
var objectStore = require('./objectStore.js');
const configs = require('./../config.js');

var auth = {
    tenancyId: configs.tenancyId,
    userId: configs.authUserId,
    keyFingerprint: configs.keyFingerprint,
    region: "us-ashburn-1"
};
var privateKeyPath = configs.privateKeyPath;
privateKeyPath = privateKeyPath.replace("~", os.homedir())
auth.privateKey = fs.readFileSync(privateKeyPath, 'ascii');
auth.passphrase = configs.passphrase
// set up parameters object
//
var parameters = {
    compartmentId: configs.compartmentId
};
var callback = function (data) {
    // logger.log('debug', JSON.stringify(data))
    console.log(JSON.stringify(data))
};

async function runShippingExtractionJob(objectName, image) {
    // logger.log('info', `runShippingExtractionJob for ${JSON.stringify(input)} for file ${objectName}`)
    auth.RESTversion = '/20160918';
    //
    // Upload file to objectStore
    //

    // set up the parameter object
    parameters = {
        objectName: objectName,
        namespaceName: "orasenatdhubsred01",
        bucketName: "kishore"
    };
    //parameters.body = JSON.stringify({ key: "special", koe: "hello", input: input });
    parameters.body = JSON.stringify({ image });
    objectStore.obj.put(auth, parameters, callback);
    return;

}// runShippingExtractionJob

module.exports = {
    runShippingExtractionJob: runShippingExtractionJob
}

// test call
runShippingExtractionJob("image.txt", "kishore")
