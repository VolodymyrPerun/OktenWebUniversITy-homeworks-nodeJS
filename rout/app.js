let http = require('http');
let fs = require('fs');
let path = require('path');
let express = require('express')
let app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'static')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'html','index.html'))
})
app.get('/user-form',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','user_form.html'))
})
app.get('/create-user',(req,res)=>{
    console.log(req.query);
    fs.createWriteStream('./users.txt').write(JSON.stringify(req.query))
    res.end('CREATED')
    
})
app.get('/pet-form',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','pet_form.html'))
})
app.post('/create-pet',(req,res)=>{
    console.log(req.body);
    fs.createWriteStream('./pets.txt').write(JSON.stringify(req.body))
    res.end('CREATED')
    
})
app.get('/users',(req,res)=>{
    res.sendFile(path.join(__dirname,'users.txt'))
})
app.get('/pets',(req,res)=>{
    res.sendFile(path.join(__dirname,'pets.txt'))
})
app.get('/delete-form',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','delete_form.html'))
})
app.post('/delete-file',(req,res)=>{
    fs.unlink(path.join(__dirname,'users.txt'),()=>{
        console.log('file deleted')    
    })
    res.end('Deleted')   
})
app.use((req,res,next)=>{
    console.log('error 404');
    res.sendFile(path.join(__dirname,'html','404.html'));
   
    
})
app.listen('8800', ()=>{
    console.log('listening 8800 port...');
    
})