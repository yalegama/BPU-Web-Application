const express= require("express");
const app=express();
const PORT= process.env.PORT;
const mysql=require("mysql");

// connecting with sql
mysql.createConnection({
    user:'root',
    password:'',
    database:'bpuproject',
    host:'localhost'
})

app.listen(PORT , ()=>{
    console.log(`Connected with ${PORT}`);
})