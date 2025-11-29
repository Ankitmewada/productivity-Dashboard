
async function fetchAPI() {
    
    let result = await fetch(`https://jsonplaceholder.typicode.com/users`)
    console.log(await result.json());

}
fetchAPI()
console.log("hello");