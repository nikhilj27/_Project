const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require('../controllers/post.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/stories', ctrlPost.allStories);
router.get('/story/:id', ctrlPost.postbyId);
router.get('/user/:id', ctrlPost.userPost);
router.post('/newStory', ctrlPost.newPost);
router.put('/updateStory', ctrlPost.updatePost);
router.delete('/deleteStory/:id', ctrlPost.deletePost);

module.exports = router;