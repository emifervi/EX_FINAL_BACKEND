const mongoose = require('mongoose')

var connectionURL;
if(process.env.NODE_ENV === 'production') {
  connectionURL = process.env.DATABASE_URL
} else {
  connectionURL = require('../config').connectionURL;
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
