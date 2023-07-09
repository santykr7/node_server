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

module.exports.destroy = async (req,res) => {
    let comment = await Comment.findById(req.params.id) 
    if(req.user.id == comment.user) {

        let postId = comment.post;
        
        comment.deleteOne();

        let post = await Post.findById(postId, {$pull: {comments: req.params.id}}) 
        return redirect('back')
    }
    else{
        return redirect('back')
    }
    
}