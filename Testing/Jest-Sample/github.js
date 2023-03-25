async function getUserAPI() {
    return await fetch("https://api.github.com/users", {
    method: "GET",}).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(error => {
        console.error(error)
    })
}

async function myTest() {
    console.log("A")
    const result = await getUserAPI()
    console.log("B")
    console.log(result[0].id)
}

const kittens = await Kitten.find();
console.log(kittens);

myTest()
