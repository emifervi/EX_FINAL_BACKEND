const mongoose = require('mongoose')

var connectionURL;
if(process.env.NODE_ENV === 'production') {
  connectionURL = require('../config').connectionURL;
} else {
  connectionURL = process.env.DATABASE_URL
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
