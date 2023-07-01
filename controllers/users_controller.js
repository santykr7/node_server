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

//sign up data

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
  
//sign in and create session for the user
module.exports.createSession = async (req,res) => {

  //steps to auth
  //find the user
  let finder = await User.findOne({ email: req.body.email });
  //if user found
  if(finder) {
    //password did not match
    if(User.password != req.body.password){
      return redirect('back')
    }
    //handle session creation
    res.cookie('user_id',user.id);
    return res.redirect('/users/profile');

  }
  else{
    //handle user not found
    return res.redirect('back')
  }

     
}