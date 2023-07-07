const Post = require('../models/posts')

module.exports.create = async(req,res) => {
    try{
    let post = Post.create({
        content:req.body.content,
        user: req.user._id

    });
    return res.redirect('back')
}catch(err) {console.log('error in create post',err)}
}