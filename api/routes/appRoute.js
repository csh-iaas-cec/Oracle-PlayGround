'use strict';
module.exports = function(app){

    var git = require('../controller/getContentController');
    
    console.log("routing to the api")
    
    app.route('/api/getContent')
        .get(git.getContent);
    
    app.route('/api/putContent')
        .put(git.putContent)

}