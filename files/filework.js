const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, '../../../Desktop/', 'fixBeer.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'delete.txt'));
        await fsPromises.writeFile(path.join(__dirname, '../../../Desktop/', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, '../../../Desktop/', 'promiseWrite.txt'), '\n\n\nAnother function for that...');
        await fsPromises.rename(path.join(__dirname, '../../../Desktop/', 'promiseWrite.txt'), path.join(__dirname, '../../../Desktop/', 'promiseRename.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, '../../../Desktop/', 'promiseRename.txt'), 'utf8');
        console.log(newData);
    } catch(err) {
        console.error(err);
    }
};

fileOps();

// pathic = 'C:\\Users\\Ailin.Hioren\\Desktop\\fixBeer.txt'

// fs.readFile(path.join(__dirname, '../../../Desktop/', 'fixBeer.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'files', 'beers.txt'), 'I love beer!', (err) => {
//     if(err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'beers.txt'), '\n\nSo do I!', (err) => {
//         if(err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'files', 'beers.txt'), path.join(__dirname, 'files', 'newBeers.txt'), (err) => {
//             if(err) throw err;
//             console.log('Rename complete');
//         })
//     })
// })

// in the same folder
// fs.appendFile(path.join(__dirname, 'append.txt'), 'Just checking something!', (err) => {
//     if(err) throw err;
//     console.log('Append complete');
// })

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

// const http = require('http')

// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>Hello, Aylin!</h1>')
// })

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// })

