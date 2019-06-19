const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Story title cant\'t be empty'
    },

    description: {
        type: String
    },

    userId : {
        type:String
    },

    postby: {
        type: String
    },

    date: {
        type: String
    },

    tags :{
        type: []
    }
});


mongoose.model('Post', postSchema);