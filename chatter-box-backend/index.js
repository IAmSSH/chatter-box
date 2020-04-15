const app = require('express')();
const io = require('socket.io');

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
});

let server = app.listen(8080, () => {console.log('Magic happens at 8080...')});

ios = io(server); 

ios.on('connection', ( socket ) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log(`Recieved Message : ${msg}`);
        socket.broadcast.emit('chat message', msg);
    })
})