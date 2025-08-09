
let newPromise = async ()=>{
    let response = await fetch('https://api.github.com/users/mqtech25');
    let result = await response.json();

    return result;
}
newPromise();

// newPromise().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })