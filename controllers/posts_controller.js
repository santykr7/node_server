const Post = require('../models/posts');
const Comment = require('../models/comments')

module.exports.create = async(req,res) => {
    try{
    let post = Post.create({
        content:req.body.content,
        user: req.user._id

    });
    return res.redirect('back')
}catch(err) {console.log('error in create post',err)}
}

module.exports.destroy = async(req,res) =>{
    let post = await Post.findById(req.params.id)
    //.id is help to convert into string
    if(post.user == req.user.id) {                                               
        post.deleteOne()

        let deleteComment = await Comment.deleteMany({post:req.params.id})
        return res.redirect('back');
        

    }
    else{ return res.redirect('back') }
}