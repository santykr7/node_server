const express = require('express')
const app = express();

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts)
app.use(express.static('./assets'))

//extract the styles and scripts from sub pages into layout - body to link tag
app.set('layout extractStyles',true) 
app.set('layout extractScripts',true) 

//set up view engine
app.set('view engine','ejs')
app.set('views','./views')

//express router
app.use('/',require('./routes/server'))
app.listen(3000,console.log('server is runningg'))