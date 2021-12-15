const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger);

//Cross Origin Resource Sharing

//list allowed to access your backend data
const whiteList = ['https://www.gooogle.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
//fn that allows to do this
const corsOprions = {
  origin: (origin, callback) => {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
      //1st arg means absence of err
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};
app.use(cors(corsOprions));

//built-in middleware to hande urlencoded data
//in other words, form fata:
//'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));
app.use('/employees', require('./routes/api/employees'));

//app.use('/*')
app.all('*', (req, res) => {
  res.status(400);
  if(req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if(req.accepts('json')) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type('txt').send("404 Not Found");
  }
});

//Error handling(4 parameters required)
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
