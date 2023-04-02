function action01() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Action 01")
            resolve({name: "Juyong Lee"})
        }, 3000);
    })
}

async function testFunction01() {
    console.log("Test Function01 Start")
    const userInfo = await action01()
    console.log(userInfo)
    console.log("Test Function01 End")  
}


function testFunction02() {
    console.log("Test Function02 Start")
    action01().then((result) => {
        console.log(result)
        console.log("Test Function02 End")
    });   
}

testFunction01()


const promiseTest = new Promise((resolve, reject) => {
    reject("promiseTest")
}) 

promiseTest.then((resolve) => {
    console.log(resolve)
}).catch(reject => {
    console.error(reject)
})