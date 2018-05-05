const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve({
            name: 'Anurag',
            age: 26    
        });
    },5000)
});

console.log("Before");

promise.then((data) => {

    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve('This is the other promise!');
        },5000)
    });

}).then((str) => {
    console.log('Does this run?', str);
}).catch((error) => {
    console.log('error:', error);
});

console.log("After");
