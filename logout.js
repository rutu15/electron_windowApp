const electron = require('electron');
var net = electron.remote.net;
document.querySelector('#btnLogout').addEventListener('click', () => {
    const request = net.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2'
    });
    request.on('response', (response) => {
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
        });
    });
    request.on('error', (error) => {
        console.log(`ERROR: ${JSON.stringify(error)}`)
    });
    request.setHeader('Content-Type', 'application/json');
    request.end();
})
