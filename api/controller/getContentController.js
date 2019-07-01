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
    // console.log("===request in controller ====",req);
    var putContent = new GetContentService();
    putContent.putContentCall(req,function(err,result){
        if(err){
            return next(err);
        }else{
           
            res.send(result);
        }
    });
}

exports.getOcid = function(req,res,next){
    
    var getContent = new GetContentService();
    
    getContent.getOcid(req,function(err,result){
        if(err){
            return next(err);
        }else{
           
            res.send(result);
        }
    });
}
