
//promise one

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // Database calls , cryptography related , network
    setTimeout(function () {
        console.log("async task is comeplete")
        resolve();
    }, 1000)
})
promiseOne.then(function () {       //resolve connected to .then 
    console.log("promise consume")
})

//promise two

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})

//promise three

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "asim",
            email: "sm89@gmail.com",
        })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})


//promise four

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({
                username: "asim",
                password: "123"
            })
        }
        else {
            reject('ERROR : something is wrong')
        }
    }, 2000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {     // use to handle error
        console.log(error)
    })
    .finally(function () {
        console.log("the task is comeplete")
    })


//promise five

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({
                username: "c++ better",
                password: "792"
            })
        }
        else {
            reject('ERROR : wrong again')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json(); //use await becasue they need time to change
        console.log(data);
    }
    catch (error) {
        console.log("E", error);
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));

// in output terminal API call back data print fast like getAllUsers() prints first but 
// promiseFour, promiseFour prints letter