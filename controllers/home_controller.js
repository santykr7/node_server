const Post = require('../models/posts')

module.exports.home = async (req,res) => {
    // console.log(req.cookies);
    // res.cookie('user_id',25);

    let disPost = await Post.find({}).populate('user')
    .populate({
        path: 'comments',
        populate: {
            path:'user'
        }
    })
    
    return res.render('home', {
        title:"ChatterBox | Home",
        posts : disPost
    })  
}   