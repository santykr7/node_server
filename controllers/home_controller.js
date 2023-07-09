const Post = require('../models/posts')
const User = require('../models/user')

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
    
    let users = await User.find({})
    return res.render('home', {
        title:"ChatterBox | Home",
        posts : disPost,
        all_user : users
    })  
}   