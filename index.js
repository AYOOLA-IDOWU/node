const express = require('express')
const app = express()
const ejs = require('ejs')

app.set("view engine", "ejs")

app.get('/', (req, res) =>{
    console.log('i am working');
    res.send('Hello World!')
})

app.get('/ejs', (req, res)=>{
    res.render("index",{name:"idowu"})
})

app.get('/signup', (req, res)=>{
    res.render("signup")
})

app.get('/welcome', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})





app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
  