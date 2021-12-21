//Cross Origin Resource Sharing

//list allowed to access your backend data
const allowedOrigins = require('./allowedOrigins');

//fn that allows to do this
const corsOprions = {
  origin: (origin, callback) => {
    if(allowedOrigins.indexOf(origin) !== -1 || !origin) {
        //1st arg means absence of err
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

module.exports = corsOprions;