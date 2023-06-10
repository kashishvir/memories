
// MONGOOSE SCHEMA gives uniformity: i.e. each post will have this things included 

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})
//now we trun this schema INTO a model
//now on this model we can run commands like find create delete
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;