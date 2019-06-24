'use strict';
const GetContentService = require('../services/getContent.service');

exports.getContent = function(req,res,next){
    var getContent = new GetContentService();
    getContent.getContentCall(req,function(err,result){
        if(err){
            return next(err);
        }else{
           
            res.send(result);
        }
    });
}

exports.putContent = function(req,res,next){
    var putContent = new GetContentService();
    putContent.putContentCall(req,function(err,result){
        if(err){
            return next(err);
        }else{
           
            res.send(result);
        }
    });
}
