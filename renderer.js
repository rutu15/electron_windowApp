const electron = require('electron');
var net = electron.remote.net;

document.querySelector('#btnEd').addEventListener('click', () => {
    const user=JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        // "email": document.getElementById('uname').value,
        // "password": document.getElementById('psw').value
    })
    console.log(document.getElementById('uname').value)
    const request = net.request({
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        url: 'https://reqres.in/api/login/'
    });
    request.on('response', (response) => {
        if(response.statusCode === 200 ){
            window.location.href="./Login.html"

        }
        else window.location.href="./failure.html"
        console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        response.on('data', (chunk) => {
            const token = JSON.parse(chunk.toString())
            sessionStorage.setItem("token", token.token);
        });
    });
    request.on('error', (error) => {
        console.log(`ERROR: ${JSON.stringify(error)}`)
    });
    request.setHeader('Content-Type', 'application/json');
    request.write(user, 'utf-8');
    request.end();
})

