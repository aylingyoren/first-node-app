//Cross Origin Resource Sharing

//list allowed to access your backend data
const whiteList = ['https://www.gooogle.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];

//fn that allows to do this
const corsOprions = {
  origin: (origin, callback) => {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
        //1st arg means absence of err
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

module.exports = corsOprions;