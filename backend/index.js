const express = require('express');

const app = express(); // Create the app:

app.use(express.json()) // Add middleware

let user= {
    'name':'muhammad qasim',
    'username':'qasim',
    'email':'mqtech25@gmail.com'
}
// Define your routes
app.get('/',(req,res)=>{
    res.send(user)
})

app.post('/user',(req,res)=>{
    let userdata = req.body;
    console.log(userdata);

    res.json(
        {
            'msg':'user has log'
        }
    )
})

// Finally, start the server with
app.listen(3000,()=>{
    console.log('app started');
})
