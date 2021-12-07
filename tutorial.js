// const axios = require('axios');
// const path = require('path');
// const fs = require('fs');
// const os = require('os');

// const text = 'C:\\Users\\Ailin.Hioren\\Desktop\\fixBeer.txt';
// console.log(path.parse(text));
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());
// try {
//   const data = fs.readFileSync(text, 'utf8');
//   console.log(data);
// } catch(err) {
//   console.error(err);
// }

// fs.readFile(text, 'utf8', (err, data) => {
//   if(err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// })
// console.log(path.dirname(text));
// console.log(path.basename(text));
// const name = 'aylin';
// console.log(path.extname(text));
// console.log(path.basename(text, path.extname(text)));
// console.log(path.join('\\', 'Users', name, 'sth.txt'));

// fs.open('C:\Users\Ailin.Hioren\Desktop', 'r', (err, fd) => {
//   //
// })

// try {
//   const fd = fs.openSync('C:\\Users\\Ailin.Hioren\\Desktop\\fixBeer.txt', 'r');
//   console.log(fd);
// } catch(err) {
//   console.error(err);
// }

// fs.stat('C:\\Users\\Ailin.Hioren\\Desktop\\fixBeer.txt', (err, stats) => {
//   if(err) {
//     console.error(err);
//     return;
//   }

//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
//   console.log(stats.isSymbolicLink());
//   console.log(stats.size);
// })

// axios
//   .post('localhost:3000', {
//     todo: 'Buy some milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// console.log("Hey, Aylin");

// const express = require("express");
// const app = express();
// const port = 5500;

// app.get("/", function (req, res) {
//   res.send("GET request to homepage");
// });

// // res.sendFile('<file-name>', {root: __dirname});

// app.listen(port, () => {
//   console.log(`Now listening on port ${port}`);
// });

// const https = require('https');
// const optionss = {
//   hostname: 'something.com',
//   port: 5100,
//   path: '/todos',
//   method: 'GET'
// };

// const reqs = https.request(optionss, ress => {
//   console.log(`statusCode: ${ress.statusCode}`);

//   ress.on('data', d => {
//     process.stdout.write(d)
//   });
// });

// reqs.on('error', error => {
//   console.error(error);
// })

// reqs.end();

// const data = new TextEncoder().encode(
//   JSON.stringify({
//     todo: 'Buy some milk'
//   })
// );

// const options = {
//   hostname: 'something.com',
//   port: 5100,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// };

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//     process.stdout.write(d)
//   });
// });

// req.on('error', error => {
//   console.error(error)
// });

// req.write(data);
// req.end();