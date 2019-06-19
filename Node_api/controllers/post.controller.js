const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const UserId = require('mongoose').Types.userId;
const Post = mongoose.model('Post');


module.exports.allStories = (req, res, next) => {
    Post.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send(['Oops, Error occur while reriving stories']);
        }
    })
}

module.exports.newPost = (req, res, next) => {
    const post = new Post();
    post.title = req.body.title;
    post.description = req.body.description;
    post.userId = req.body.userId;
    post.postby = req.body.postby;
    post.date = req.body.date;
    post.tags = req.body.tags;

    post.save((err, doc) => {
        if (!err) {
            res.status(200).send({status: 200, doc: doc});
        } else {
            res.send(['Oops, Error occur while uploading story']);
        }
    });
}

module.exports.postbyId = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send(`No Story wih given id: ${req.params.id}`);
    }
    Post.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.send(['Oops, Error occur while retriving story']);

        }
    });
}

module.exports.updatePost = (req, res, next) => {
    if (!ObjectId.isValid(req.body._id)) {
        res.status(400).send(`No Story wih given id: ${req.body._id}`);
    }

    var post = {
        title : req.body.title,
        description : req.body.description,
        userId : req.body.userId,
        postby : req.body.postby,
        date : req.body.date,
        tags : req.body.tags,
    }

    Post.findByIdAndUpdate(req.body._id, {$set: post}, {new: true}, (err, doc)=>{
        if(!err){
            res.send(doc);
        } else {
            res.send('Error occur while updating strory.');
        }
    });
}


module.exports.deletePost = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send(`No Story wih given id: ${req.params._id}`);
    }

    Post.findByIdAndRemove(req.params.id, (err, doc)=>{
        if(!err){
            res.send('Story Deleted Successfully.');
        } else {
            res.send('Error occur while deleting strory.');
        }
    })
}

module.exports.userPost = (req, res, next) => {
    
    Post.find({userId: req.params.id}, (err, docs)=>{
        if(!err){
            res.send(docs);
        } else {
            res.send('Error occur while retriving strory.');
        }
    })
}