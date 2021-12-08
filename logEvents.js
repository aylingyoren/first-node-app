const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
// const log = require('./logger');

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\thh:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(path.join(__dirname, "logs", logName), logItem);
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;

// log('my name is Aylin!');
