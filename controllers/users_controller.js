const { error } = require('console')
const User = require('../models/user')

module.exports.profile = (req,res) => {
    res.render('profile',{
        users: "Ashwini"
    })
}

// render the Signup page
module.exports.signUp = (req,res) => {
    return res.render('user_sign_up', {
        title: "Codeial | Sign UP"
    })
}
// render the Sign In page
module.exports.signIn = (req,res) => {
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

//get sign up data
// module.exports.create = async function(req,res) {
//     try{
//         if(req.body.password != req.body.confirm_password){
//             return res.redirect('back')
//         }
        
//         let finder = await User.findOne({email:req.body.email})
//         console.log('user found...!')
//         if (!User) {
//            let creater = await User.create(req.body)
                
//                 res.redirect('/users/sign-in')
//                 console.log('user created')
//         }else {
//             res.redirect('back')
//         }
//     }catch(err) {
//         console.log('error in ')
//     }
   
    
// }

module.exports.create = async function (req, res) {
    try {
      if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
      }
  
      let finder = await User.findOne({ email: req.body.email });
      console.log('userrr found')
  
      if (!finder) {
        let created = await User.create(req.body);
        console.log('User created:', created);
        return res.redirect('/users/sign-in');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.log('Error: ', err);
      return;
    }
  };
  


  // sign in and create session for user
module.exports.createSession = async function(req,res) {
  try{
    //find the user 
    let finder = await User.findOne({email: req.body.email})

    //handle user if found
    if(finder) {
      //handle when passord is wrong
      if(finder.password!=req.body.password) {
        return res.redirect('back')
      }
      //handle creste session 
      res.cookie('user_id',finder.id);
      return res.redirect('/users/profile')
    }
    
    //handle user if not found
    else {
      return res.redirect('back')
    }
  }
  catch(err){
    console.log('error in sign in page ')
    return
  }
    

}