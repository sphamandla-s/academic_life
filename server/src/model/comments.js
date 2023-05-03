import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    comments: String,
    reply: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments'
        }
    ]
});

const Comments = mongoose.model('Comments', CommentSchema);

export default Comments;