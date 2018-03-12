const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


app.use((req, res, next)=>{
    let now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log',log + '\n',(err)=>{
        if(err){
            console.log('Unable to write data in log file.');
        }
    });
    next();
});

// app.use((req, res, next)=>{
//     res.render('maintenance');
// });
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('upperCase', (text)=>{
return text.toUpperCase();
});



app.get('/',(req,res) =>{
    res.render('home', {
        welcomeMsg:'Welcome to Home',
        pageTitle:'Home',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req,res)=>{
res.render('about',{
    pageTitle:'About Page',
    currentYear: (new Date()).getFullYear()
});
});

app.listen(3000)