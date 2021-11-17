const data = require('./MOCK_DATA.json');
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Welcome to Home page')
});
app.get('/user',(req,res)=>{
    res.send(data);
});

app.listen(2333,()=>{
    console.log("Start")
})