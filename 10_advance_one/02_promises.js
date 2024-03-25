/*************** Promise Creation ***************/
const promiseOne = new Promise(function (resolve, reject) {
    // Do an asynchronous task
    // DB calls, file reading, cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

/*************** Promise Consumption ***************/
promiseOne.then(function () {
    console.log('Promise Consumed');
})

// Second way to create and consume a promise directly
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is complete");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

// Passing argument/parameter in promises with resolve/reject
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Rakesh",
            email: "rakesh@gmail.com",
            password: "rakesh"
        })
        // reject("request rejected") // Only one will be execute either resolve or reject
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
    console.log(typeof user);
}).catch(function (message) {
    console.log(message);
})

// Conditional based resolve and reject (Use of '.then' chaining and '.finally')
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Rakesh", password: "rakesh23" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

/***** In '.then' chaining we have access to those variable that are returned in the previous '.then' method *****/
promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (name) {
    console.log(name);  // '.then' chaining
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Promise is either resolved or rejected"); // It will run independent of promise result
})

// Different way of handling promise (async, await)
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = true
        if (!error) {
            resolve({ username: "Javascript", password: 123 })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

// Note: Cann't use 'asynchronous' function directly. As they cann't handle the error directly
// Use 'asynchronous' function inside a 'try catch' block to handle the error

// Below code will result in error if promise is rejected. It doesn't have a 'catch' block

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

console.log(`type of promises is ${typeof promiseFive}`);
consumePromiseFive()

// Using of fetch with 'async', 'await'
async function getUserDetails() {
    try {
        const response = await fetch('https://api.github.com/users/rakesh-kumar-18')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getUserDetails()

// Using of fetch with '.then', '.catch'
fetch('https://api.github.com/users/rakesh-kumar-18').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
})
