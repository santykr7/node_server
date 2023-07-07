const { error } = require('console')
const User = require('../models/user')

module.exports.profile = (req,res) => {
    res.render('profile',{
        users: "users profile"
    })
}

// render the Signup page
module.exports.signUp = (req,res) => {
  if(req.isAuthenticated()){
    return res.redirect('/users/profile')
    }

    return res.render('user_sign_up',{
      title:"'Codeial setup'"
    })
  }

// render the Sign In page
module.exports.signIn = (req,res) => {
  if(req.isAuthenticated()) {
    return res.redirect('/users/profile');
  }

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
module.exports.createSession = (req,res) => {
  return res.redirect('/')
  
}
//sign in and finish session for the user
module.exports.destroySession = (req,res,next) =>{

  req.logout(function(err) {
    if(err) {
      return next(err)
    }
  

  return res.redirect('/');
  });
  
}