const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

passport.use( new LocalStrategy({
    usernameField:'email'
},
async(email,password,done)=> {
    let findUser = await User.findOne({email:email})
    console.log('found User')
    

    if(!findUser || findUser.password != password){
        console.log('error in user/password')
        return done(null,false)
    }
    return done(null, findUser)
}))



//serializing fn - user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done) {
        done(null,user.id)
}) 

// deseialize fn - deseriallize user from the key in the cookies
passport.deserializeUser( async (id,done) => {
    try{
    let findUser = await User.findById(id);
    return done(null,findUser)
    }
    catch{
        console.log('error in deserialize')
    }
})

// passport.deserializeUser(async (id, done) => {
//     const user = await User.findById(id);
  
//     if (!user) {
//       return done(null, false);
//     }
  
//     return done(null, user);
//   })

//check if user is authenticated
passport.checkUserAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/users/sign-in')
}

passport.setAuthenticatedUser = (req,res,next) =>{
    if(req.isAuthenticated()) {
        req.locals.user = req.user
    }
    next();
}


module.exports = passport;