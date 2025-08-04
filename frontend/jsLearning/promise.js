// let newPromise = new Promise((resolve,reject)=>{
//     let data =true;

//     if(data){
//         resolve('The promise return with resolve call')
//     }else{
//         reject('The promise return with reject call')
//     }
// })

// newPromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return await data;
}

// Usage:
getTodo().then(todo => console.log(todo)).catch(err => console.error('Error:', err));