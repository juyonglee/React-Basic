const os = require('node:os');

console.log(os.cpus()[0].model)
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.uptime())

function getRunTime(error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject({
                    code: 404,
                    message: "Error가 발생했습니다."
                })
            } 
            resolve({
                username: "사용자 1",
                password: "1230782193" 
            })
        }, 1000)
    })
}

getRunTime(false).then(result => {
    console.log(`안녕하세요! ${result.username}님`)
}).catch(error => {
    console.log(error)
})
