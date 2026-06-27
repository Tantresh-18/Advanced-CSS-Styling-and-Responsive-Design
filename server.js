const express=require('express');
const path=require('path');

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit',(req,res)=>{
 res.render('result',{name:req.body.username});
});

app.listen(PORT,()=>{
 console.log(`Server running at http://localhost:${PORT}`);
});
