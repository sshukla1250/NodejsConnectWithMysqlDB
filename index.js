const express = require('express');
const mysql=require('mysql');
const con = require('./config');

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    con.query("select * from product",(err,result)=>{
       if(err){
        res.send('error');
       }else{
        res.send(result); 
       }
    });
    
});


app.post('/',(req,res)=>{
    con.query("insert into product set ?",req.body,(err,result,fields)=>{
       if(err){
        res.send('error in api');
       }else{
        res.send(result); 
       }
    });
    
});

app.put('/:id',(req,res)=>{
    const data=[req.body.pname,req.body.batchNo, req.params.id];
    con.query("update product set pname=?,batchNo=? where id=?",data,(err,result,fields)=>{
       if(err){
        res.send('error in api');
       }else{
        res.send(result); 
       }
    });  
});

app.delete('/:id',(req,res)=>{
    //const data=[req.body.pname,req.body.batchNo, req.params.id];
    con.query("delete from product where id=?",req.params.id,(err,result,fields)=>{
       if(err){
        res.send('error in api');
       }else{
        res.send(result); 
       }
    });
    
});
app.listen(4500);