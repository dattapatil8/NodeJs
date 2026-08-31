
  const express = require('express');

  const authRoute=require('./routs/auth.route')
const cookieParse=require('cookie-parser')

const app = express();

app.use(express.json())
app.use(cookieParse()



)
app.use('/api/auth',authRoute )

module.exports = app;
