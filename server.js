const express = require('express')
const app = express();

app.use('/',require('./routes/server'))
app.listen(3000,console.log('server is runningg'))