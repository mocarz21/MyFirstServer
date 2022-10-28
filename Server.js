const express = require('express');
const { userInfo } = require('os');
const path = require('path')

const app = express(0);

app.use((req,res,next)=>{
    res.show=(name)=>{
        res.sendFile(path.join(__dirname, `/views/${name}`))
    }
    next();
})


app.use('/user',(req,res,next) => {
    isUser= () => {
        res.send('You must log in')
    }
    if(isUser()) 
    res.send('You must log in')
    else res.show('LogIn.html') //czemu nie działa przejscie do strony
})

app.use(express.static(path.join(__dirname, '/views/public/')));

app.get('/', (req, res)=>{
    res.show('index.html');
})

app.get('/home', (req, res)=>{
    res.show('index.html');
})

app.get('/about', (req, res) => {
    res.show('about.html');
})

app.use((req,res) => {
    res.status(404).show('/public/obraz.jpg');
})

app.listen(8000, () => {
    console.log('Server on: 8000');
})