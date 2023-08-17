const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/JavaScript',express.static('JavaScript'));
app.use('/Animination',express.static('Animination'));
app.use('/css',express.static('css'));
app.use('/Body-Layout',express.static('Body-Layout'))
app.use('/Button-Layout',express.static('Button-Layout'))
app.use('/Buttons',express.static('Buttons'))
app.use('/Cover',express.static('Cover'))
app.use('/Page-Layout',express.static('Page-Layout'))
app.use('/SongFile',express.static('SongFile'))
app.use('/User-Logo',express.static('User-Logo'))
app.use('/Button_SongList',express.static('Button_SongList'))


//////////////////////////////////////////////////////////////////////////////////////

var songList = [{
    songPath : "1",
    ser_songName:["Tere Waste Mai-","Shubh Evalutate","Taki-Taki Song-","Aksar is duniya","Gangster Parad"],
    coverPath:"1",
    coverName:["cover1.jpg","cover2.jpg","cover3.jpg","cover4.jpg","cover5.jpg"]
},{
    songPath : "2",
    ser_songName:["Believer Song -","Rauf - fauk Hi-","Let me Love yo-","On My Way - - -","Trevor Deni-all"],
    coverPath:"2",
    coverName:["cover1.jpg","cover2.jpg","cover3.jpg","cover4.jpg","cover5.jpg"]
},
{
    songPath : "3",
    ser_songName:["Hey Ram Hey Ram","Hum katha Suna-","Mera Bhola hai-","Tum Prem Ho-radhe","Karpur Gauram -"],
    coverPath:"3",
    coverName:["cover1.jpg","cover2.jpg","cover3.jpg","cover4.jpg","cover5.jpg"]
},
{
    songPath : "4",
    ser_songName:["Sab Tera baghi-","Falak tak chal-","Koi-Khairiyat -","Sanam Re Sanam-","Tera Fitur jab-"],
    coverPath:"4",
    coverName:["cover1.jpg","cover2.jpg","cover3.jpg","cover4.jpg","cover5.jpg"]
},
{
    songPath : "5",
    ser_songName:  ["Rakh-Lunga-Hide","Kinne Din ho gye","Lehanga Song P-","Laung Ve lanchi","Teparory-Love -"],
    coverPath:"5",
    coverName:["cover1.jpg","cover2.jpg","cover3.jpg","cover4.jpg","cover5.jpg"]
},
];

//////////////////////////////////////////////////////////////////////////////////////


app.get('/spotify',(req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.end(data);
    });
});

app.get('/nextpage',(req,res)=>{
    res.json(songList).send();
})
 
app.listen(3000,()=>{
    console.log("Server Is Listen on 3000 port");
}) 


app.get('/index',(req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err){
            console.log('page not found By server');
            return;
        }
        res.end(data);
    })
})


app.get('/about',(req,res)=>{
    fs.readFile('about.html',(err,data)=>{
        if(err){
            console.log('page not found By server');
            return;
        }
        res.end(data);
    })
});


app.get('/SignUp',(req,res)=>{
    fs.readFile('SignUp.html',(err,data)=>{
        if(err){
            console.log('page not found By server');
            return;
        }
        res.end(data);
    })
});

app.get('/Login',(req,res)=>{
    fs.readFile('Login.html',(err,data)=>{
        if(err){
            console.log('page not found By server');
            return;
        }
        res.end(data);
    })
})

