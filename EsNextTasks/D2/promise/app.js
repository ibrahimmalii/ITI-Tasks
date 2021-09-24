const promiseSteps = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
    }, 3000);
})

promiseSteps('Welcome to your page from first promise:)').then((data) => {
    alert(data);
    return promiseSteps('<img src="1.jpg">')
}).then((data) => {
    document.write(data);
    return promiseSteps('Thank You again for watching');
}).then(data => {
    alert(data);
    return promiseSteps('http://www.google.com')
}).then(data=>{
    location.assign(data);
}).catch((err) => {
    console.log(err)
});


