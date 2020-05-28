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
    //  console.log("===request in controller ====",req.param);
    //  console.log("===request in controller ====",req.body);
    //  console.log("request in controller", req.query);
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

exports.getJob = function(req,res,next){
    var getJob = new GetContentService();
    getJob.getJob(req, function(err, result){
        if(err){
            return next(err);
        }else{
           
            res.send(result);
        }
    });
}

exports.putDetails = function(req, res, next) {
    var putDetails = new GetContentService();
    console.log(req.query)
    putDetails.putDetails(req,function(err, result){
        if(err){
            return next(err);
        }else{
           
            res.send(result);
        }
    });
}
