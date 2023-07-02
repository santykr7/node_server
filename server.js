const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');


app.use(express.urlencoded({extended:false}));

app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);


//extract the styles and scripts from sub pages into layout - body to link tag
app.set('layout extractStyles',true) ;
app.set('layout extractScripts',true) ;

//set up view engine
app.set('view engine','ejs');
app.set('views','./views')

app.use(session({
    name:'codeial',

    //change the secret code before production environment
    secret: 'wannawow',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            
            mongoUrl: "mongodb://127.0.0.1:27017/session",
            autoRemove: 'disabled'
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session())

app.use(passport.setAuthenticatedUser);

//express router
app.use('/',require('./routes/server'))


app.listen(3000,console.log('server is runningg'))