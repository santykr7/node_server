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
module.exports.create = (req,res) => {
    //later
}

module.exports.createSession = (req,res) => {
    //later
}