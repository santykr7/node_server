const Comment = require('../models/comments')

const Post = require('../models/posts')

module.exports.create = async(req,res) => {
    try{
        let findPost = await Post.findById(req.body.post)
            if(findPost) {
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });
            findPost.comments.push(comment);
            findPost.save();
            return res.redirect('/');
    }
}catch(err) {
    return console.log('error in comment',err);
}
}