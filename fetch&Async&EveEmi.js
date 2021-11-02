// Fetch
fetch('/data.json')
    .then(ResponseStream => {
        if (ResponseStream.status === 200) {
            return ResponseStream.json()
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: ', err);
    });

// Async/Await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunction = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json()
    );
    return dataJSON;
};

simpleFunction()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

    //EventEmitter
    const EventEmitter = require('events');

    class Users extends EventEmitter {
        userlogged(data) {
            setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
      }
    }

    const users = new Users();

        user.on('User logged', data => {
        console.log(data);
    });

    Users.userlogged({ user: 'Leonardo' });
    Users.userlogged({ user: 'Hanna' });